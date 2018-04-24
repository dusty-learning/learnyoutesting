# Tape

Tape is a testing suite you can find on npm and use to test your projects. I personally use it for all of my node modules and applications.

Tape is an easy plug and play suite that lets you hop right in and start writing easy to understand tests.

## Format

Usually a tape test.js looks a little like this:

```js
// Bring in tape as our test function
var test = require('tape');
// Bring in your module you want to test against
var myModule = require('./index');

// This is a test instance using test()
test('Test it does the add', function (t) {
  // Write some tests! Check below to get an idea of how
});
```

The most common assertions for tape are usually `ok`, `equal`, `notOk`, and `deepEqual` however you can find a the rest of the list right on their documentation on github.

## End

All of the tests need to have a `t.end()` as the very last part of your test. That or you can use `t.plan(NumberOfTests)`. This tells Tape that test block is done and to stop the stream to move on.

```js
var test = require('tape');

test('Stop using end', function (t) {
  t.ok(true, 'always true value!');

  // Make sure yo put our end in
  t.end();
});
// Or using the plan route

test('Stop using end', function (t) {
  // We plan to have one test go
  t.plan(1);

  t.ok(true, 'always true value!);
});
```

## Output

The output of tape uses `TAP` as we talk about in the `TAP README` it prints out a text based interface of your results.

Like this:

```
TAP version 13
# Test it does the add
ok 1 Our function returned with something
ok 2 The type of run is an object
ok 3 Addition function ran and returned correctly
ok 4 Subtraction function ran

1..4
# tests 4
# pass  4

# ok
```

However there are a bunch of different kinds of formatters you can use to change how this output looks. To name a few:

- [tap-spec](https://github.com/scottcorgan/tap-spec)
- [tap-json](https://github.com/gummesson/tap-json)
- [tap-prettify](https://github.com/toolness/tap-prettify)
- [tap-markdown](https://github.com/Hypercubed/tap-markdown)
- [tap-html](https://github.com/gabrielcsapo/tap-html)

And a bunch more, each one formats the TAP output differently. Take your pick!

For more in depth examples of using tape be sure to checkout the examples folders for different example sets.