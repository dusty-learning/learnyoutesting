# Unit Testing

**DO NOTE** This repo covers only testing on the side of JavaScript. (Sorry!)

## Core Concept

Unit testings main purpose is to do one thing, test the code you write

### Not Testing in the Browser

No testing it in the browser does't count. The purpose of testing is so later on say you want to add/edit a feature, you don't have to worry about what will break. Your tests will verify that all of your functionality is still intact.

It's a good idea to build out your testing setup and environment as you write your code to keeps things on a 1 to 1 basis. This also helps with groups working on the same codebase, if one of your team adds in new code, and it breaks a unit test well I suggest that code doesn't go any further.

This is also the easiest approach it makes sure your code is indeed testable, and stays that way as you advence and your app becomes larger and more complex.

You want to make sure you ALWAYS test all of your code as much as possible and from as many different use cases that you can think of.

### Try to test only your code

If you're using external libraries like a JavaScript framework, or utility library like `underscore` since these are usually already well tested, if not then I may start to question your judgement.

## Contents

- [What is a Unit Test?](https://github.com/dhershman1/learnyoutesting/blob/master/what-is-a-unit-test)
- [Testing Suites](https://github.com/dhershman1/learnyoutesting/blob/master/testing-suites)
- [What is a Tap?](https://github.com/dhershman1/learnyoutesting/blob/master/tap)
- [How to Use Tape](https://github.com/dhershman1/learnyoutesting/blob/master/tape)

## How To

- Clone the repo
- Open repo and run `npm i`
- Run one of the following commands:
   - `npm run test:01` - Run the simple tests
   - `npm run test:02-user` - Run the user tests
   - `npm run test:02-weather` - Run the weather tests
   - `npm run test:03` - Run the example 3 tests
   - `npm run test:04` - Run the example 4 tests
   - `npm run test:04:tapspec` - Run the example 4 tests with the tap-spec formatting
   - `npm run test:activity` - Run the activity tests (Uses `tap-spec` formatting)
   - `npm test` - Runs all of the example tests