const normalize = require('../')
const { test } = require('node:test')
const assert = require('node:assert')

// all of these just delete the bins, so expect the same value
const expect = { name: 'hello', version: 'world' }

test('no bin in object', async () => {
  const pkg = { name: 'hello', version: 'world' }
  assert.deepStrictEqual(normalize(pkg), expect)
  assert.deepStrictEqual(normalize(normalize(pkg)), expect, 'double sanitize ok')
})

test('empty string bin in object', async () => {
  const pkg = { name: 'hello', version: 'world', bin: '' }
  assert.deepStrictEqual(normalize(pkg), expect)
  assert.deepStrictEqual(normalize(normalize(pkg)), expect, 'double sanitize ok')
})

test('false bin in object', async () => {
  const pkg = { name: 'hello', version: 'world', bin: false }
  assert.deepStrictEqual(normalize(pkg), expect)
  assert.deepStrictEqual(normalize(normalize(pkg)), expect, 'double sanitize ok')
})

test('null bin in object', async () => {
  const pkg = { name: 'hello', version: 'world', bin: null }
  assert.deepStrictEqual(normalize(pkg), expect)
  assert.deepStrictEqual(normalize(normalize(pkg)), expect, 'double sanitize ok')
})

test('number bin', async () => {
  const pkg = { name: 'hello', version: 'world', bin: 42069 }
  assert.deepStrictEqual(normalize(pkg), expect)
  assert.deepStrictEqual(normalize(normalize(pkg)), expect, 'double sanitize ok')
})
