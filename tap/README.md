# TAP

[TAP](https://testanything.org/), the Test Anything Protocol, is a simple text-based interface between testing modules in a test harness

It allows individual tests (TAP producers) to communicate test results to the testing harness in a language-agnostic way.

## TAP Philosophy

- Should work on the TAP as a stream (i.e. as each line is received) rather than wait until all the TAP is received.
- The TAP source should be pluggable.
- The TAP display should be pluggable.
- Should be able to gracefully handle future upgrades to TAP.
- Should be forward compatible.
    - Ignore unknown directives
    - Ignore any unparsable lines
