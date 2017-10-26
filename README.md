# Unit Testing

**DO NOTE** This repo covers only testing on the side of JavaScript. (Sorry!)

## Core Concept

Unit testings main purpose is to do one thing, test the code you right

No testing it in the browser does't count. The purpose of testing is so later on say you want to add a new feature, or edit a current one you don't have to worry about what it will break, because you just have to run your unit tests and make sure all of your functionality still works as expected.

It's a good idea to build out your testing setup and environment as you write your code to keeps things on a 1 to 1 basis. This also helps with groups working on the same codebase, if one of your team adds in new code, and it breaks a unit test well I suggest that code doesn't go any further.

Writing tests side by side with your code is the easiest approach it makes sure your code is indeed testable, and stays that way as you advence and your app becomes larger and more complex.

Try not to test libraries or frameworks you've brought in, unless those are not throughly tested themselves. In which case I may question your judgement.

Focus on a single testing file per piece you make, whether its a small utility function, or the logic to run your page. 

You want to make sure you ALWAYS test all of your code as much as possible and from as many different use cases that you can think of.


## Contents

- [What is a Unit Test?](https://github.com/dhershman1/learnyoutesting/blob/master/what-is-a-unit-test)
- [Testing Suites](https://github.com/dhershman1/learnyoutesting/blob/master/testing-suites)
- [What is a Tap?](https://github.com/dhershman1/learnyoutesting/blob/master/tap)
- [How to Use Tape](https://github.com/dhershman1/learnyoutesting/blob/master/tape)
