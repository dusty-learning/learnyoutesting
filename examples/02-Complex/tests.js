const test = require('tape');
const module = require('./index');
const complex = module();

test('Test extender', t => {
  const results = complex.extend({
    test: 'value',
    thing: 'no change'
  }, {
    test: 'New Value'
  });

  t.ok(results, 'Results are okay');
  t.deepEqual(results, { test: 'New Value', thing: 'no change' }, 'Test value changed but thing did not');
  t.end();
});
