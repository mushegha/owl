import test from 'ava'

import main from '..'

test('type', t => {
  t.is(typeof main, 'function')
})
