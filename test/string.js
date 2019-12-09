const normalize = require('../')
const t = require('tap')

t.test('benign string', async t => {
  const pkg = { name: 'hello', version: 'world', bin: 'hello.js' }
  const expect = { name: 'hello', version: 'world', bin: { hello: 'hello.js' } }
  t.strictSame(normalize(pkg), expect)
  t.strictSame(normalize(normalize(pkg)), expect, 'double sanitize ok')
})

t.test('slashy string', async t => {
  const pkg = { name: 'hello', version: 'world', bin: '/etc/passwd' }
  const expect = { name: 'hello', version: 'world', bin: { hello: 'etc/passwd' } }
  t.strictSame(normalize(pkg), expect)
  t.strictSame(normalize(normalize(pkg)), expect, 'double sanitize ok')
})

t.test('dotty string', async t => {
  const pkg = { name: 'hello', version: 'world', bin: '../../../../etc/passwd' }
  const expect = { name: 'hello', version: 'world', bin: { hello: 'etc/passwd' } }
  t.strictSame(normalize(pkg), expect)
  t.strictSame(normalize(normalize(pkg)), expect, 'double sanitize ok')
})
