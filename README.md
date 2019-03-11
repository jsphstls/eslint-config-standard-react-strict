# eslint-config-standard-react-strict
A strict and subjective ruleset for React projects.

## Overview
* Extends [eslint-config-standard-react](https://www.npmjs.com/package/eslint-config-standard-react) and [eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app).
* Includes [sort-imports-es6-autofix/sort-imports-es6](https://www.npmjs.com/package/eslint-plugin-sort-imports-es6-autofix).
* Includes [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
* Adds strict and subjective rules.

## Usage
```bash
npm install --save-dev eslint-config-standard-react-strict
```
Extend "eslint-config-standard-react-strict" in an eslint config.
```
{
  "extends": ["standard-react-strict"]
}
```
*Note: The `eslint-config-` prefix is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your eslint config.

## Notes
* Focuses on auto-fixing.
* Intended to increase code consistency in a team environment.
* Includes packages that are required by eslint-config-standard-react but not installed with eslint-config-standard-react.
* New rules will be added in minor version increments. Using a fixed version is recommended to avoid build failures.
* Tested compatible up to react-scripts/create-react-app 2.1.8

