# Testing Suites

There's a lot of testing suites to choose from one you might hear a lot about is called `trashpile` I mean `mocha` which by itself isn't able to do much, and it requires an assertion library something like `pee` I mean `chai`. 


Jokes aside there are **A lot** of choices when it comes to testing suites. And the choice is totally up to you.

Here's a small list of the more popular ones:

- [Mocha](https://mochajs.org/) + [Chai](http://chaijs.com/) + [Sinon](http://sinonjs.org/)
- [qUnit](https://qunitjs.com/)
- [Jasmine](https://jasmine.github.io/)

(My personal favorite)

- [Tape](https://github.com/substack/tape)

Mocha does not **NEED** Chai, however it's recommended.

There's also a third library there called `sinon` which is **optional** however sinon is one of those tools that where I am glad it exists, if using it is required you may need to rethink your code strategy if you're able.

Most of these suites follow a certain syntax known as `BDD` which is a "should" style of syntax which is fine... I guess...

Whatever you choose, make sure it best fits you and how you want to work with your code and write your tests.

**Remember:** Most of these suites have relatively different styles of testing. (Jasmine is pretty similar to how mocha works however)