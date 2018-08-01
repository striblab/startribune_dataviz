/**
 * Methods to get and create data with Google Sheets, specifically
 * using ArchieML to parse documents
 *
 * https://developers.google.com/drive/v3/reference/
 */

// Dependencies
const url = require('url');
const htmlparser = require('htmlparser2');
const { AllHtmlEntities } = require('html-entities');
const GoogleDrive = require('./google-drive.js');
const archieml = require('archieml');
const request = require('request');

// Main class
class GoogleDocs extends GoogleDrive {
  constructor(options = {}) {
    super(options);
  }

  // Create new document.
  async newDoc(options = {}) {
    let resource = {
      name: options.title || 'New blank document for project',
      mimeType: 'application/vnd.google-apps.document'
    };

    if (this.options.noAuth) {
      throw new Error('Cannot create new document with the "noAuth" option.');
    }

    let auth = await this.authenticate();
    return await this.drive.files.create({
      resource: resource,
      fields: '*',
      auth: auth
    });
  }

  // Get the raw contents of a google doc
  async getHTMLContents(id) {
    if (!id) {
      throw new Error(
        'Document/file id not provided to getHTMLContents method'
      );
    }

    // Check if we have no auth
    if (this.options.noAuth) {
      return await this.getPublishedToWebContent(id);
    }

    //let auth = await this.authenticate();
    return await this.drive.files
      .export({
        fileId: id,
        mimeType: 'text/html'
        //auth: auth
      })
      .then(r => r.data);
  }

  // Get contents via "Published to Web"
  async getPublishedToWebContent(url) {
    if (!url || !url.match(/^http/i)) {
      throw new Error(
        'URL provided to getPublishedToWebContent method does not start with "http"'
      );
    }

    return new Promise((resolve, reject) => {
      request.get(url, (error, response, body) => {
        if (error) {
          return reject(error);
        }
        if (response.statusCode >= 300) {
          return reject(
            new Error(
              `Request for public google doc returned ${response.statusCode}.`
            )
          );
        }

        resolve(body);
      });
    });
  }

  // Parse simplified text of HTML
  async getTextContents(id) {
    let contents = await this.getHTMLContents(id);
    return await this.htmlParser(contents);
  }

  // Parse archieml from text
  async getStructuredContents(id) {
    let contents = await this.getTextContents(id);
    return archieml.load(contents);
  }

  // HTML parser
  // via https://github.com/bradoyler/googledoc-to-json/blob/master/index.js
  async htmlParser(text) {
    return new Promise((resolve, reject) => {
      const handler = new htmlparser.DomHandler((error, dom) => {
        if (error) {
          return reject(error);
        }

        const tagHandlers = {
          _base: tag => {
            let str = '';
            tag.children.forEach(function(child) {
              const transform = tagHandlers[child.name || child.type];
              if (transform) {
                str += transform(child);
              }
            });
            return str;
          },
          text: textTag => {
            return textTag.data;
          },
          div: divTag => {
            return tagHandlers._base(divTag);
          },
          span: spanTag => {
            return tagHandlers._base(spanTag);
          },
          p: pTag => {
            return tagHandlers._base(pTag) + '\n';
          },
          a: aTag => {
            let { href } = aTag.attribs;
            if (href === undefined) return '';
            // extract real URLs from Google's tracking
            // from: http://www.google.com/url?q=http%3A%2F%2Fwww.nytimes.com...
            // to: http://www.nytimes.com...
            if (
              aTag.attribs.href &&
              url.parse(aTag.attribs.href, true).query &&
              url.parse(aTag.attribs.href, true).query.q
            ) {
              href = url.parse(aTag.attribs.href, true).query.q;
            }

            let str = '<a href="' + href + '">';
            str += tagHandlers._base(aTag);
            str += '</a>';
            return str;
          },
          li: tag => {
            return '* ' + tagHandlers._base(tag) + '\n';
          }
        };

        const listTags = ['ul', 'ol'];
        listTags.forEach(tag => {
          tagHandlers[tag] = tagHandlers.span;
        });

        const hTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
        hTags.forEach(tag => {
          tagHandlers[tag] = tagHandlers.p;
        });

        // Published contents have a slightly different structure
        const body =
          dom[0].type === 'directive' ? dom[1].children[1] : dom[0].children[1];
        const parsedText = tagHandlers._base(body);

        // Convert html entities into the characters as they exist in the google doc
        const entities = new AllHtmlEntities();
        const decodedText = entities.decode(parsedText);

        // Remove smart quotes from inside tags
        const cleanText = decodedText.replace(/<[^<>]*>/g, match => {
          return match.replace(/”|“/g, '"').replace(/‘|’/g, '\'');
        });

        resolve(cleanText);
      });

      const parser = new htmlparser.Parser(handler);
      parser.write(text);
      parser.done();
    });
  }
}

module.exports = GoogleDocs;
