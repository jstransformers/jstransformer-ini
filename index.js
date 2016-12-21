'use strict'

var ini = require('ini')

exports.name = 'ini'
exports.inputFormat = ['ini']
exports.outputFormat = 'json'

exports.render = function (str, opts) {
  return JSON.stringify(ini.parse(str, opts))
}
