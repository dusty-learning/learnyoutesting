const test = require('tape')
const calculateTax = require('../tax')

test('calculateTax -- throws an error', t => {
  t.throws(calculateTax, 'Parameter price is required and must be a number')

  t.end()
})

test('calculateTax -- Adds amount to total', t => {
  t.same(calculateTax(4), 4.32, 'applied tax to amount')
  t.same(calculateTax(5.22), 5.64, 'applied tax to decimal amount')
  t.end()
})
