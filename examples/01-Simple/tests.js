var test = require('tape');
var myModule = require('./index');

// This is a test instance
test('Test it does the add', function (t) {
  var run = myModule();

  t.ok(run, 'Our function returned with something');
  t.equal(typeof run, 'object', 'The type of run is an object');
  t.equal(run.doAdd(1, 1), 2, 'Addition function ran and returned correctly');
  t.equal(run.doSubtract(2, 1), 1, 'Subtraction function ran');

  // The end is always required so we can tell tape when to finish up
  t.end();
});

test('Testing what happens when a string is passed in', function (t) {
  var run = myModule();

  t.ok(run, 'Our run returned a new instance');
  // Uh oh looks like this test fails
  t.equal(run.doAdd('1', '1'), '2', 'Outcome should do addition');
  t.equal(run.doSubtract('2', '1'), 1, 'Our subtraction function should give back 1');
  t.end();
});
