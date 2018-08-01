# Testing

Testing is run via [Jest](https://facebook.github.io/jest/). Fast, unit and higher level testing will happen on build. You can run these test manually with `gulp js:test` or `npm test`.

_TODO_: Write more meaningful tests.

_TODO_: Some basic automated, cross-browser testing would be very beneficial. Unfortunately things like Browserstack are very expensive, and managing our own servers to do this would be very expensive time-wise as well.

## Embed testing

A manual test page is provided for looking at the piece embeded in another page.

1.  Assumes you are running the development server with `gulp develop`
1.  Run a local server for the test directory, such as `cd tests && python -m SimpleHTTPServer` or `http-server ./tests/`
1.  In a browser, go to [http://localhost:8080/manual/embed.html](http://localhost:8080/manual/embed.html).
