/**
 * jstransformer-ini <https://github.com/jstransformers/jstransformer-ini>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var ini = require('ini');

exports.name = 'ini';
exports.inputFormat = ['ini'];
exports.outputFormat = 'json';

exports.render = function _render(str, opts) {
  return JSON.stringify(ini.parse(str, opts));
};
