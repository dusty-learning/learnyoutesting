var test = require('tape')
var validationLib = require('./index')

test('Test Default Options', function (t) {
  var validate = validationLib()

  t.notOk(validate.withinLimit(21), '21 is greater than the default of 20')
  t.notOk(validate.withinLimit(-1), '-1 is less than the default of 0')

  t.end()
})

test('Test Option Validation', function (t) {
  var validate = validationLib({
    max: 'ABC',
    min: 'DEF'
  })

  // They should reset to their defaults of 20 and 0
  t.notOk(validate.withinLimit(21), '21 is greater than the default of 20')
  t.notOk(validate.withinLimit(-1), '-1 is less than the default of 0')

  t.end()
})

test('aboveMin', function (t) {
  // Create our new instance
  // We will just stick to our defaults for now
  var validate = validationLib()

  t.ok(validate.aboveMin(3), '3 is greater than 0')
  t.ok(validate.aboveMin('3'), 'String 3 is greater than 0')
  t.notOk(validate.aboveMin(0), '0 is not greater than 0')
  t.notOk(validate.aboveMin('ABC'), 'ABC is not greater than 0')

  t.end()
})

test('belowMax', function (t) {
  // Create our new instance
  // We will just stick to our defaults for now
  var validate = validationLib()

  t.ok(validate.belowMax(3), '3 is below 20')
  t.ok(validate.belowMax('3'), 'String 3 is below 20')
  t.notOk(validate.belowMax(20), '20 is not below than 20')
  t.notOk(validate.belowMax('ABC'), 'ABC is not below than 20')

  t.end()
})

test('Test withinLimit', function (t) {
  // You don't need to do this everytime, you can set validate at the top as well and use that
  // This just keeps it to a brand new instance per test block
  var validate = validationLib()

  t.ok(validate.withinLimit(4), '4 is within or max and min')
  t.ok(validate.withinLimit(8), '8 is within or max and min')
  t.ok(validate.withinLimit('7'), '7 is within or max and min')
  t.notOk(validate.withinLimit(20), '20 is not within or max and min')
  t.notOk(validate.withinLimit(-2), '-2 is not within or max and min')

  t.end()
})

test('Run tests with custom options', function (t) {
  var validate = validationLib({
    max: 10,
    min: 5
  })
  // Let's set our function to a variable for easier access
  var aboveMin = validate.aboveMin
  var belowMax = validate.belowMax

  t.ok(aboveMin(6), '6 is above 5')
  t.ok(aboveMin(10), '10 is above 5')
  t.notOk(aboveMin(4), '4 is not above 5')
  t.notOk(aboveMin(5), '5 is not above 5')
  t.ok(belowMax(6), '6 is below 10')
  t.ok(belowMax(4), '4 is below 10')
  t.notOk(belowMax(10), '10 is not below 10')
  t.notOk(belowMax(11), '1 is not below 10')

  t.end()
})
