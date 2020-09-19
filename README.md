# Check/remove unused modules (files)/imports

Install with npm:

```bash
npm i --save-dev unused-files-webpack-plugin
```

## For app created by create-react-app

Install `react-app-rewired` to override the webpack config

Install with npm:

```bash
npm i --save-dev react-app-rewired
```

Place in the root project directory file `config-overrides.js` containing:

```js
const { UnusedFilesWebpackPlugin } = require("unused-files-webpack-plugin");

module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }
  config.plugins.push(new UnusedFilesWebpackPlugin());
  return config;
}
```
More about [`unused-files-webpack-plugin`](https://github.com/tomchentw/unused-files-webpack-plugin/)

Add to `package.json` a command to start check:
```json
   ...
  "scripts": {
   ...
    "start_with_check": "react-app-rewired start --scripts-version react-scripts",
  }
  ...
```
There will be a list of unused modules/files in terminal output after script start

Place this file list in array `files` in `del-file-list.js` and run
```bash
node ./del-file-list.js
```
Be careful, check yourself all list before deleting.
