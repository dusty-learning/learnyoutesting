var myModule = require('../index')
require('chai').should()

describe('It does a math', function () {
  var run = {}

  before(function () {
    run = myModule()
  })

  it('should do an add', function () {
    run.doAdd(1, 2).should.equal(3)
  })

  it('should do a subtract', function () {
    run.doSubtract(2, 1).should.equal(1)
  })
})
