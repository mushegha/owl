import test from 'ava'

import schema from '..'

test('meta', t => {
  t.is(typeof schema.name, 'string')
  t.is(typeof schema.version, 'number')
})

test('actions', t => {
  t.not(schema.actions.welcome, 'undefined')
})
