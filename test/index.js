/**
 * jstransformer-ini <https://github.com/jstransformers/jstransformer-ini>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var pkg = require('fs');
var test = require('assertit');
var transform = require('../index');

test('should render ini file from given string (.render)', function(done) {
  var actual = transform.render('[foo]\nbar = "baz"\nqux = true');
  var expected = {"foo": {"bar": "baz", "qux": true}};

  test.deepEqual(actual, expected);
  done();
});

test('should render from a given filepath, synchronously', function(done) {
  var actual = transform.renderFile('./test/fixture.ini');
  var expected = {"foo": {"bar": "baz", "qux": true}};

  test.deepEqual(actual, expected);
  done();
});

test('should render myth file asynchronously (promise)', function(done) {
  var promise = transform.renderFileAsync('./test/fixture.ini');
  var expected = {"foo": {"bar": "baz", "qux": true}};

  promise.then(function(actual) {
    test.deepEqual(actual, expected);
    done();
  });
});
