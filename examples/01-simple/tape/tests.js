var test = require('tape')
var myModule = require('../index')

// This is a test instance
test('It does a math', function (t) {
  var run = myModule()

  t.equal(run.doAdd(1, 1), 2, 'It did an add')
  t.equal(run.doSubtract(2, 1), 1, 'It did a subtract')

  // The end is always required so we can tell tape when to finish up
  t.end()
})
