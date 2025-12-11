const normalize = require('../')
const { test } = require('node:test')
const assert = require('node:assert')

test('benign array', async () => {
  const pkg = { name: 'hello', version: 'world', bin: ['./x/y', 'y/z', './a'] }
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

test('conflicting array', async () => {
  const pkg = { name: 'hello', version: 'world', bin: ['./x/y', 'z/y', './a'] }
  const expect = { name: 'hello',
    version: 'world',
    bin: {
      y: 'z/y',
      a: 'a',
    } }
  assert.deepStrictEqual(normalize(pkg), expect)
  assert.deepStrictEqual(normalize(normalize(pkg)), expect, 'double sanitize ok')
})

test('slashy array', async () => {
  const pkg = { name: 'hello', version: 'world', bin: ['/etc/passwd'] }
  const expect = { name: 'hello', version: 'world', bin: { passwd: 'etc/passwd' } }
  assert.deepStrictEqual(normalize(pkg), expect)
  assert.deepStrictEqual(normalize(normalize(pkg)), expect, 'double sanitize ok')
})

test('dotty array', async () => {
  const pkg = { name: 'hello', version: 'world', bin: ['../../../../etc/passwd'] }
  const expect = { name: 'hello', version: 'world', bin: { passwd: 'etc/passwd' } }
  assert.deepStrictEqual(normalize(pkg), expect)
  assert.deepStrictEqual(normalize(normalize(pkg)), expect, 'double sanitize ok')
})

test('dotty array with backslashes', async () => {
  const pkg = { name: 'hello', version: 'world', bin: ['..\\..\\..\\..\\etc\\passwd'] }
  const expect = { name: 'hello', version: 'world', bin: { passwd: 'etc/passwd' } }
  assert.deepStrictEqual(normalize(pkg), expect)
  assert.deepStrictEqual(normalize(normalize(pkg)), expect, 'double sanitize ok')
})
