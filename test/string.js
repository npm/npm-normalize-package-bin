const normalize = require('../')
const { test } = require('node:test')
const assert = require('node:assert')

test('benign string', async () => {
  const pkg = { name: 'hello', version: 'world', bin: 'hello.js' }
  const expect = { name: 'hello', version: 'world', bin: { hello: 'hello.js' } }
  assert.deepStrictEqual(normalize(pkg), expect)
  assert.deepStrictEqual(normalize(normalize(pkg)), expect, 'double sanitize ok')
})

test('slashy string', async () => {
  const pkg = { name: 'hello', version: 'world', bin: '/etc/passwd' }
  const expect = { name: 'hello', version: 'world', bin: { hello: 'etc/passwd' } }
  assert.deepStrictEqual(normalize(pkg), expect)
  assert.deepStrictEqual(normalize(normalize(pkg)), expect, 'double sanitize ok')
})

test('dotty string', async () => {
  const pkg = { name: 'hello', version: 'world', bin: '../../../../etc/passwd' }
  const expect = { name: 'hello', version: 'world', bin: { hello: 'etc/passwd' } }
  assert.deepStrictEqual(normalize(pkg), expect)
  assert.deepStrictEqual(normalize(normalize(pkg)), expect, 'double sanitize ok')
})

test('dotty string with backslashes', async () => {
  const pkg = { name: 'hello', version: 'world', bin: '..\\..\\..\\..\\etc\\passwd' }
  const expect = { name: 'hello', version: 'world', bin: { hello: 'etc/passwd' } }
  assert.deepStrictEqual(normalize(pkg), expect)
  assert.deepStrictEqual(normalize(normalize(pkg)), expect, 'double sanitize ok')
})

test('double path', async () => {
  const pkg = { name: 'hello', version: 'world', bin: '/etc/passwd:/bin/usr/exec' }
  const expect = { name: 'hello', version: 'world', bin: { hello: 'etc/passwd:/bin/usr/exec' } }
  assert.deepStrictEqual(normalize(pkg), expect)
  assert.deepStrictEqual(normalize(normalize(pkg)), expect, 'double sanitize ok')
})

test('string with no name', async () => {
  const pkg = { bin: 'foobar.js' }
  const expect = {}
  assert.deepStrictEqual(normalize(pkg), expect)
  assert.deepStrictEqual(normalize(normalize(pkg)), expect, 'double sanitize ok')
})
