const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const projectRoot = __dirname;
const packageRoot = path.resolve(projectRoot, '..');
const packageName = require('../package.json').name;
const escapeForRegExp = (value) => value.replace(/[/\\^$*+?.()|[\]{}]/g, '\\$&');

const config = getDefaultConfig(projectRoot);

// Run the live source in ../src, so edits show up without building.
config.watchFolders = [packageRoot];
config.resolver.extraNodeModules = { [packageName]: path.resolve(packageRoot, 'src') };
config.resolver.nodeModulesPaths = [path.resolve(projectRoot, 'node_modules')];
// Hide the package root's node_modules and lib, so ../src resolves everything from this app.
config.resolver.blockList = [
  ...[config.resolver.blockList ?? []].flat(),
  new RegExp(`^${escapeForRegExp(path.join(packageRoot, 'node_modules'))}\\/.*$`),
  new RegExp(`^${escapeForRegExp(path.join(packageRoot, 'lib'))}\\/.*$`),
];

module.exports = config;
