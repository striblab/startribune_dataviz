# Publishing

Overall, the strategy to publish is to host on `static.startribune.com` (S3) and then embed via an iframe, or utilize the CMS's LCD system to manage markup in the CMS and host external resources like JS, CSS, and images on S3.

## Commands

The following command-line `gulp` commands will help you along the way. Make sure to use `gulp tasks` to see up to date list of all tasks.

* `gulp deploy`: This is the big one that will rebuild the project and push up to S3. Use flags like `--staging` or `--production` to publish to a specific place, depending on what your `config.json` looks like (see _Configuration_ below).
* `gulp cms:lcd`: This will output some common values used for the LCD in the CMS.

### AWS/S3 integration

The simplest way to publish to S3 is to use the `gulp deploy` command, though you could manually copy the files up if needed to. To make sure the deploy and publish commands work, you will need to have some AWS credentials setup. These can be set as enivonrment variables, and specifically can be set in the `.env` file.

* `AWS_ACCESS_KEY_ID`
* `AWS_SECRET_ACCESS_KEY`
* OR `AWS_DEFAULT_PROFILE`

For further reading on setting up access, see [Configureing the JS-SDK](http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/configuring-the-jssdk.html).

## Embed

If this project is best used as an embed via iframe or just a standalone, read below.

### Strib-tag

_strib-tags_ are "macros" used in the CMS. This is the preferred way to embed the project, assuming it gets published to `static.startribune.com`.

Go to [embed-a-writer](http://static.startribune.com/news/tools/embed-it/) and use the _Star Tribune embed_.

### Raw embed

You can also simply use an iframe with some HTML. Specifically, utilize [pym.js](http://blog.apps.npr.org/pym.js/) so that the iframe becomes resopnsive to the content.

```html
<div data-pym-src="https://static.startribune.com/news/projects/all/<%= package.name %>">Loading...</div>
<script src="https://static.startribune.com/assets/libs/pym.js/1.3.2/pym.v1.min.js" type="text/javascript"></script>
```

## CMS

If this project is meant to live within the [Star Tribune CMS](https://cms.clickability.com/cms), read blow. Overall, this means that the markup and content are stored within the CMS, while the styling and javascript is managed externally, probably on S3.

### Setup

To setup an article to take advantage of this workflow:

1.  Create an article. Set the `Template overide` that is something like `Full page article vXX`.
1.  Make sure the Article ID is in `config.json` in this project.
1.  Create an LCD that is connected to the Article.
    * You can update the `config.json` in this project with this ID, as it is helpful to have the reference, but it doesn't affect any development locally.
    * Common values in the LCD to use:
      * `content`: Main body of content, this is likely the `build/_index-content.html` file that is rendered.
      * `styles`: `news/projects/all/<%= package.name %>/styles.bundle.css`
      * `scripts`: `news/projects/all/<%= package.name %>/app.bundle.js`
      * `script libraries` or `style libraries`

### Local CMS

To test the content through a local [news-platform](https://github.com/MinneapolisStarTribune/news-platform/), make sure the following is true:

* Ensure that `ASSETS_STATIC_URL` environment variable set to `http://localhost:3000/` for `news-platform`. This is necessary to use the local version of the assets in this project.
* `news-platform` is installed and running.
* In this project, make sure that the `config.json` has the correct values, see above.
* To serve locally: `gulp develop --cms`

## Configuration

Publishing is configured in the `config.json` file. The `publish` property can have the following keys: `default`, `testing`, `staging`, and `production`. It is suggested to use default in place of the `staging` as the default gets used when no flag is specified (see below). Each key should correspond to an object with `bucket`, `path`, and `url`. **IMPORTANT**: The `url` should be a fully qualified URL that ends with a `/`. This URL will get inserted into some meta tags on the page by default. For example:

```js
{
  "publish": {
    "default": {
      "bucket": "static.startribune.com",
      "path": "news/projects-staging/all/<%= package.name %>/",
      "url": "http://static.startribune.com/news/projects-staging/all/<%= package.name %>/"
    },
    "production": {
      "bucket": "static.startribune.com",
      "path": "news/projects/all/<%= package.name %>/",
      "url": "http://static.startribune.com/news/projects/all/<%= package.name %>/"
    }
  }
}
```

Using the flags `--testing`, `--staging`, or `--production` will switch context for any relevant `publish` or `deploy` commands. Note that if the flag is not configured, the `default` will be used.

### Publishing token

The publishing function, uses a token that helps ensure a name collision with another project doesn't overwrite files unwittingly. The `publishToken` in `config.json` is used as an identifier. This gets deployed to S3 and then checked whenever publishing happens again.

If you see an error message that states that the tokens do not match, make sure that the location you are publishing to doesn't have a different project at it, or converse with teammates or administrators about the issue.

### CMS

For CMS integration, the following should be in the `config.json` file:

```
"cms": {
    "id": "XXXXXXXX",
    "pages": ["XXXXXXXX", "YYYYYYYYY"],
    "lcds": ["ZZZZZZZZZZ"],
    "rewriteMapping": {
      "article-lcd-body-content": "_index-content.html"
    }
  },
```
