# JFK file analysis

A script to upload and OCR released JFK assassination files from the National Archive to [Overview](https://github.com/overview).


# overview-upload-directory
A script to upload a directory of document files to an Overview server, skipping files previously uploaded.

# usage
`python upload.py  [-s <SERVER_URL>] [-n] -t <API_TOKEN> file`

* `API_TOKEN` is required. It's the access token for a particular document set, which you get like this

   1. Browse to your document set. The URL will look like `https://www.overviewdocs.com/documentsets/123456`.
   2. Note the document set number, in this case 123456
   3. Browse to `https://www.overviewdocs.com/documentsets/[your number here]/api-tokens` and click "Generate token".

* `SERVER_URL` is the base URL for the server, which defaults to http://localhost:9000 for use with [overview-local](https://github.com/overview/overview-local)

* `-n` means don't skip previously uploaded files. This might cause duplicates and waste a lot of time. Files are compared by their hash, meaning that even if you move or rename a file it will not be uploaded again.

* `file` is the name of a file, or a directory. 

The document title will be set to the file name, with any path stripped off. If you upload a directory, all except the directory name itself will be stripped. So `upload some/path/to/directory` will produce titles of the form `directory/file1`, `directory/subdir/file2`, etc. This is so the current working directory when uploading files doesn't affect the folder structure on Overview. If you want to preserve `some/path/to`, do `upload some`.

Files that were previously uploaded to the server, then deleted locally, will not be deleted from the server. 

Requires python3

28uzersdvmrsohvcd28y2nlvp




python upload.py  -s https://www.overviewdocs.com -n -t 5lnafm40exj3kjnjef1gee2b2 /Volumes/JUNKRUNNER/JFK --ocr --split-by-page