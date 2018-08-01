# Code styles and linting

Having a consistent style for code and similar aspects makes collaboration easier. Though there is nothing that enforces these things, intentionally so, spending some time to adhere to these styles will be beneficial in the long run.

* **JS**: Javascript is linted with [ESLint](http://eslint.org/) and defined in `.eslintrc`.
  * The defined style extends from [eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint.json) but is more focal about single quotes for strings and using semicolons.
  * Install the following ESLint plugins for [Atom](https://atom.io/packages/linter-eslint), [Sublime Text](https://github.com/roadhump/SublimeLinter-eslint), or [others](http://eslint.org/docs/user-guide/integrations).
* **Styles**: SASS (and CSS) is linted with [stylelint](https://stylelint.io/) and defined in `.styleintrc`.
  * The defined style extends from [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) with a couple additions to how colors are defined.
  * Install the following stylelint plugins for [Atom](https://atom.io/packages/linter-stylelint), [Sublime Text](https://github.com/kungfusheep/SublimeLinter-contrib-stylelint), or [others](https://stylelint.io/user-guide/complementary-tools/).
