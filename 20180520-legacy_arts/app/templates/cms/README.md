The overrides are included here for reference, but may not be the actual override used in production.

## LCD variables

Project libraries

* `Style libraries`: Raw HTML for any styles.
  * Example: `<link rel="stylesheet" href="//cdn.bootstrap.com/bootstrap.css" type="text/css">`
  * `Desktop style libraries`: Desktop specific scripts. This is additive.
  * `Mobile style libraries`: Mobile specific scripts. This is additive.
* `Script libraries`: Raw HTML for any script libraries.
  * Example: `<script src="//code.jquery.com/jquery.3.3.3.js"></script>`
  * `Desktop script libraries`: Desktop specific scripts. This is additive.
  * `Mobile script libraries`: Mobile specific scripts. This is additive.

Project assets

* `Styles`: Comma separated lists of path to styles, specifically to be used in the `static_asset` function (see below).
  * Example: `news/projects/all/strib-nonprofit-100-2017/styles.bundle.css, news/projects/all/strib-nonprofit-100-2017/other.css`
  * `Desktop styles`: Desktop specific scripts. This is additive.
  * `Mobile styles`: Mobile specific scripts. This is additive.
* `Scripts`: Comma separated lists of path to javascript files, specifically to be used in the `static_asset` function (see below).
  * Example: `news/projects/all/strib-nonprofit-100-2017/app.bundle.js, news/projects/all/strib-nonprofit-100-2017/other.js`
  * `Desktop scripts`: Desktop specific scripts. This is additive.
  * `Mobile scripts`: Mobile specific scripts. This is additive.

Content

* `Content`: Raw HTML content for the article. Supports sharing replacement (see below).
  * `Desktop content`: Desktop specific scripts. This is additive.
  * `Mobile content`: Mobile specific scripts. This is additive.
  * If you really need different markup for mobile and desktop, which should not be often, simply leave the default `Content` blank and use the device specific ones.

Others

* `Body class`: Any body classes to add.
  * `Desktop Body class`: Desktop specific classes. This is additive. There is already a `.page-dekstop` class added.
  * `Mobile Body class`: Mobile specific classes. This is additive. There is already a `.page-mobile` class added.
* `Hero`: Raw HTML for hero content. Overall, this can and **should be managed in the main content**. Supports sharing replacement (see below).
  * `Desktop hero`: Desktop specific scripts. This is additive.
  * `Mobile hero`: Mobile specific scripts. This is additive.
  * If you really need different markup for mobile and desktop, which should not be often, simply leave the default `Hero` blank and use the device specific ones.
* `Header scripts`: Raw HTML for any scripts to added to the `<head>`. This shouldn't be used often.
  * Example: `<script src="//code.jquery.com/jquery.3.3.3.js"></script>`
  * `Desktop header scripts`: Desktop specific scripts. This is additive.
  * `Mobile header scripts`: Mobile specific scripts. This is additive.

## Static asset

The `static_asset` function allows to reference something locally in development, and then something on `static.startibune.com` in production.

Overall, this should be the location where it is published on `static.`. For instance:

    news/projects/all/strib-nonprofit-100-2017/app.bundle.js

To get this to work locally, we tell BrowserSync that the production URL refers to the `build` directory. We manage this in `config.json`, specifically with the `publish.production.path` variable.

## Sharing

Note the string `<!-- sharing -->` will get replaced with the sharing component for the page.
