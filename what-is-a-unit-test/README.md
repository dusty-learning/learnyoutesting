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

_I will shamelessly throw in that I suggest learning to write code in a functional manner is your best bet. MOVING ON!_

**Now when I say untestable, I don't actually mean untestable. Everything is testable it's just a matter of how much you hate yourself.**

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

Try to write your code along with your tests to keep it in order, so long as you're able to easily keep pace and your tests are understandable and easy to write you can probably feel good that you're code is A-OK.

**The Following set of information is from an article written by medium which I will source near the bottom you can get the full read which contains more details and more information on mocking**
## Why is Mocking A bad idea?

This isn't to imply that mocking is bad, or that you should never mock anything.

### What is a mock?

A mock is a test double that stands in for real implementation code during the unit testing process. A mock is capable of producing assertions about how it was manipulated by the test subject during the test run. If your test double produces assertions, it’s a mock in the specific sense of the word.

The term “mock” is also used more generally to refer to the use of any kind of test double.

This can cause a form of `tight coupling` but what is `tight coupling`?

### What is Tight Coupling?

`tight coupling` is the need to mock in order to achieve unit isolation for the purpose of unit tests is caused by coupling between units. Tight coupling makes code more rigid and brittle: more resistant to change without breaking. In general, less coupling is desirable for its own sake because it makes code easier to extend and maintain. The fact that it also makes testing easier by eliminating the need for mocks is just icing on the cake.

This coupling can take different forms such as:

- `Subclass coupling`: Subclasses are dependent on the implementation and entire hierarchy of the parent class: the tightest form of coupling available in OO design.
- `Control dependencies`: Code that controls its dependencies by telling them what to do, e.g., passing method names, etc… If the control API of the dependency changes, the dependent code will break.
- `Mutable state dependencies`: Code that shares mutable state with other code, e.g., can change properties on a shared object. If relative timing of mutations change, it could break dependent code. If timing is nondeterministic, it may be impossible to achieve program correctness without a complete overhaul of all dependent units: e.g., there may be an irreparable tangle of race conditions. Fixing one bug could cause others to appear in other dependent units.
- `State shape dependencies`: Code that shares data structures with other code, and only uses a subset of the structure. If the shape of the shared structure changes, it could break the dependent code.
- `Event/message coupling`: Code that communicates with other units via message passing, events, etc…

Okay so...

### What causes Tight Coupling?

- Mutation vs immutability
- Side-Effects vs purity/isolated side-effects
- Responsibility overload vs Do One Thing (DOT)
- Procedural instructions vs describing structure
- Imperative composition vs declarative composition

Imperative and object-oriented code is more susceptible to tight coupling than functional code. That doesn’t mean that programming in a functional style makes your code immune to tight coupling, but functional code uses pure functions as the elemental unit of composition, and pure functions are less vulnerable to tight coupling by nature.

Pure functions:

- Given the same input, always return the same output
- Produce no side-effects

`Pure Functions` help reduce coupling just with these two effects. As well as many others.

### Source

You can read more on `coupling`, `composition` and `pure functions` from the medium article most of this information is from here:

https://medium.com/javascript-scene/mocking-is-a-code-smell-944a70c90a6a

I highly suggest reading through it, since it is a pretty good read on unit testing and mocking data. It can show you how to make your life just a bit easier in the testing world.