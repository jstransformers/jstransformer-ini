# jstransformer-ini

[ini](https://www.npmjs.com/package/ini) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-ini/master.svg)](https://travis-ci.org/jstransformers/jstransformer-ini)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-ini/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-ini)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-ini/master.svg)](http://david-dm.org/jstransformers/jstransformer-ini)
[![NPM version](https://img.shields.io/npm/v/jstransformer-ini.svg)](https://www.npmjs.org/package/jstransformer-ini)

## Installation

    npm install jstransformer-ini

## API

```js
var ini = require('jstransformer')(require('jstransformer-ini'));
var content = `
[ini]
bar = "baz"
qux = true
`

var result = ini.render(content);
console.log(JSON.parse(result.body))
//=> '{"ini": {"bar": "baz", "qux": true}}'
```

## License

MIT
