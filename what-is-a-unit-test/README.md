# What is a Unit Test?

So **What** is a `Unit Test` exactly?

A `Unit Test` is basically a test that well.. tests your unit of code. You use unit testing for most of your front end JavaScript, backend testing is usually known as `Integration Testing` we can cover that later though.

A unit test runs some code over a segment of your program checking the input and output. These tests allow developers to check individual areas of a program to see where(and why) errors occur. They check blocks of code to ensure that they all run as expected. This is very common for traditional software development and now very common in web development too.

This objective comes with a understanding you should have a general idea of what you're writing your tests for, and how they should work. 

Believe it or not, most developers don't actually know how to unit test. At least they're unable to unit test correctly.

## More than a single way

No this doesn't mean there is a single great one and only way you should be writing your unit tests. There are a good number of different ways to go about the task with the different number of modules you can use to your advantage, each one does it a little differently.

## Testability

This is probably **THE** most important step make sure your code is testable, the key to this is making sure you are writing code that is **1 to 1**.

By that I mean try to make sure the functions you write don't call a kabillion other functions, make sure they don't mutate data passed into it, and make sure they create and send something back (like a function should). This will make your life hell of a lot easier the larger your application gets. 

I will shamelessly throw in that I suggest learning to write code in a functional manner is your best bet. MOVING ON!

Now when I say untestable, I don't actually mean untestable. Everything is testable it's just a matter of how much you hate yourself.

Below is untestable code:

```js
var globalState = 0

var addOne = function() {
  globalState + 1;
}
```

You can never actually test the above code. Because our tests will never actually know globalState exists.

How can you make it testable?

```js
var addOne = function(param) {
  if (!isNaN(param)) {
    return param + 1;
  }

  return 'Invalid Value type passed in';
}
```

The above is testable simply because `addOne` now takes in a value adds one to it, and returns the new value. So long as it's a number (gotta be sure!). Here you now have 2 use cases you should be testing against. Once if it IS a number and once if it isn't a number!


## Keep it simple

Instead of trying to test `mutating data`, or a fake endpoint. Keep it down to a simply testing `functions` that transforms the data and sends it back or on its way. Remember Mutating in general is bad, try to always avoid it or you're going to have a bad time.

Try to write your code along with your tests to keep it in order, so long as you're able to easily keep pace and your tests are understandable and easy to write you can probably feel good that you're code is A-OK