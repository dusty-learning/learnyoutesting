var test = require('tape');
var module = require('./index');
var complex = module();

test('Test extender', function (t) {
  var results = complex.extend({
    test: 'value',
    thing: 'no change'
  }, {
    test: 'New Value'
  });

  t.ok(results, 'Results are okay');
  t.deepEqual(results, { test: 'New Value', thing: 'no change' }, 'Test value changed but thing did not');
  t.end();
});

test('Test new AddOne', function (t) {
  var results = complex.addOne(2);

  t.ok(results, 'Results came back alright');
  t.equal(results, 3, 'The results came back equal to 3');
  t.equal(complex.addOne('1'), 2, 'Results should come back 2');
  t.equal(complex.addOne('ABC'), 'Not a Number Type', 'Results are not a number type');
  t.end();
});