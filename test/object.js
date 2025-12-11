const normalize = require('../')
const { test } = require('node:test')
const assert = require('node:assert')

test('benign object', async () => {
  // just clean up the ./ in the targets and remove anything weird
  const pkg = { name: 'hello',
    version: 'world',
    bin: {
      y: './x/y',
      z: './y/z',
      a: './a',
    } }
  const expect = { name: 'hello',
    version: 'world',
    bin: {
      y: 'x/y',
      z: 'y/z',
      a: 'a',
    } }
  assert.deepStrictEqual(normalize(pkg), expect)
  assert.deepStrictEqual(normalize(normalize(pkg)), expect, 'double sanitize ok')
})

test('empty and non-string targets', async () => {
  // just clean up the ./ in the targets and remove anything weird
  const pkg = { name: 'hello',
    version: 'world',
    bin: {
      z: './././',
      y: '',
      './x': 'x.js',
      re: /asdf/,
      foo: { bar: 'baz' },
      false: false,
      null: null,
      array: [1, 2, 3],
      func: function () {},
    } }
  const expect = { name: 'hello',
    version: 'world',
    bin: {
      x: 'x.js',
    } }
  assert.deepStrictEqual(normalize(pkg), expect)
  assert.deepStrictEqual(normalize(normalize(pkg)), expect, 'double sanitize ok')
})

test('slashy object', async () => {
  const pkg = { name: 'hello',
    version: 'world',
    bin: {
      '/path/foo': '/etc/passwd',
      bar: '/etc/passwd',
      '/etc/glorb/baz': '/etc/passwd',
      '/etc/passwd:/bin/usr/exec': '/etc/passwd',
    } }
  const expect = {
    name: 'hello',
    version: 'world',
    bin: {
      foo: 'etc/passwd',
      bar: 'etc/passwd',
      baz: 'etc/passwd',
      exec: 'etc/passwd',
    },
  }
  assert.deepStrictEqual(normalize(pkg), expect)
  assert.deepStrictEqual(normalize(normalize(pkg)), expect, 'double sanitize ok')
})

test('dotty object', async () => {
  const pkg = {
    name: 'hello',
    version: 'world',
    bin: {
      nodots: '../../../../etc/passwd',
      '../../../../../../dots': '../../../../etc/passwd',
      '.././../\\./..//C:\\./': 'this is removed',
      '.././../\\./..//C:\\/': 'super safe programming language',
      '.././../\\./..//C:\\x\\y\\z/': 'xyz',
    } }
  const expect = { name: 'hello',
    version: 'world',
    bin: {
      nodots: 'etc/passwd',
      dots: 'etc/passwd',
      C: 'super safe programming language',
      z: 'xyz',
    } }
  assert.deepStrictEqual(normalize(pkg), expect)
  assert.deepStrictEqual(normalize(normalize(pkg)), expect, 'double sanitize ok')
})

test('weird object', async () => {
  const pkg = { name: 'hello', version: 'world', bin: /asdf/ }
  const expect = { name: 'hello', version: 'world' }
  assert.deepStrictEqual(normalize(pkg), expect)
  assert.deepStrictEqual(normalize(normalize(pkg)), expect, 'double sanitize ok')
})

test('oddball keys', async () => {
  const pkg = {
    bin: {
      '~': 'target',
      '£': 'target',
      ζ: 'target',
      ぎ: 'target',
      操: 'target',
      '🎱': 'target',
      '💎': 'target',
      '💸': 'target',
      '🦉': 'target',
      'сheck-dom': 'target',
      Ωpm: 'target',
      ζλ: 'target',
      мга: 'target',
      пше: 'target',
      тзч: 'target',
      тзь: 'target',
      нфкт: 'target',
      ссср: 'target',
      君の名は: 'target',
    },
  }

  const expect = {
    bin: {
      '~': 'target',
      '£': 'target',
      ζ: 'target',
      ぎ: 'target',
      操: 'target',
      '🎱': 'target',
      '💎': 'target',
      '💸': 'target',
      '🦉': 'target',
      'сheck-dom': 'target',
      Ωpm: 'target',
      ζλ: 'target',
      мга: 'target',
      пше: 'target',
      тзч: 'target',
      тзь: 'target',
      нфкт: 'target',
      ссср: 'target',
      君の名は: 'target',
    },
  }

  assert.deepStrictEqual(normalize(pkg), expect)
  assert.deepStrictEqual(normalize(normalize(pkg)), expect, 'double sanitize ok')
})
