/**
 * jstransformer-ini <https://github.com/jstransformers/jstransformer-ini>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var ini = require('ini');
var bluebird = require('bluebird');
var readFile = bluebird.promisify(fs.readFile);
var readFileSync = fs.readFileSync;

exports.name = 'ini';
exports.outputFormat = 'json';

exports.render = function _render(str, opts) {
  return ini.parse(str, opts);
};
exports.renderFile = function _renderFile(filepath, opts) {
  var input = readFileSync(filepath, 'utf8');
  return ini.parse(input, opts);
};
exports.renderFileAsync = function _renderFileAsync(filepath, opts) {
  return readFile(filepath, 'utf8').then(function(data) {
    return ini.parse(data, opts);
  });
};
