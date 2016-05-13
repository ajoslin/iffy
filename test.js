'use strict'

var test = require('tape')
var iffy = require('./')

test('true', function (t) {
  t.plan(1)
  function onTrue () {
    t.pass('true!')
  }

  function onFalse () {
    t.fail('false!')
  }

  iffy(true, onTrue, onFalse)
})

test('false', function (t) {
  t.plan(1)
  function onTrue () {
    t.fail('true!')
  }

  function onFalse () {
    t.pass('false!')
  }

  iffy(false, onTrue, onFalse)
})

test('false with no false value', function (t) {
  t.plan(1)
  t.doesNotThrow(function () {
    iffy(false, function () {})
  })
})
