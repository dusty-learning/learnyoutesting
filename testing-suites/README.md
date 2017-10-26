# Testing Suites

Testing suites... There are a lot of them out there 

Here's a small list of the more popular ones:

- [Mocha](https://mochajs.org/) + [Chai](http://chaijs.com/)
- [qUnit](https://qunitjs.com/)
- [Jasmine](https://jasmine.github.io/)
- [Tape](https://github.com/substack/tape)

Mocha does not **NEED** Chai, however is ** DOES NEED** you to require in some kind of assertion library, Chai happens to be the most popular one (because people like to write using BDD format for some reason)

Whatever you choose, make sure it best fits you and how you want to work with your code and write your tests.

## What is a Testing Suite

So I just threw all these names at you but what exactly is a testing suite? 

A testing suite is a sort of library that creates a "Test Harness" or "Testing environment" for your code, so you can throw all kinds of doodads at it to make sure it handles it all correctly.

Each testing suite handles the environment differently. However `Mocha` + `Chai` are fairly similar to `Jasmine` in how they run.

`qUnit` does it's own thing as well as `Tape`. 

## How do I choose

Just like **everything** else in the world of development you get overwhelmed with choosing rather than actually writing the code.

My advice, don't get hung up on it, pick one that fits you best and you understand the best whatever gets the job done for you. They're just tests don't let yourself get buried in doubt.

`Mocha` requires a bit more to setup like I said a seperate `assertion` library is required so it can be a little more complex, where as suites like `Tape` are just required in and ready to go. 

Why use the ones that require more setup? Well if you prefer the syntax and the way it outputs results, that is a pretty good reason. Sometimes your deploy software requires thigns to format a certain way, so that might limit your choices.
