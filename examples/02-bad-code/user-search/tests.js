var test = require('tape')
var UserSearch = require('./index')

// Luckily with tape we can handle this bad situation with our modification

test('Test our weather response', function (t) {
  // Create our new user search instance
  var instance = new UserSearch('local', 'Cleveland, OH')

  // First let's make sure the constructor "new'd" correctly
  t.ok(instance, 'Constructor vomitted okay')
  // Then we can test the individual pieces of the constructor
  t.equal(instance.name, 'local', 'The instance name is local')
  t.equal(instance.location, 'Cleveland, OH', 'The instance location is Cleveland, OH')

  // Now lets get some data from weather and make sure out getWeather method works
  // We will need to run our tests within our callback function since there's no other way to really handle it
  instance.getWeather(function (err, data) {
    if (err) {
      return console.log(err)
    }
    t.ok(data, 'Data Came back!')
    // Grab our object from the array
    var response = data[0]

    // And then run tests against it
    t.equal(response.location.name, instance.location, 'The response location is the same as our instance')
    t.ok(response.current.temperature, 'Current data came back ok')
    t.equal(response.location.degreetype, 'F', 'The degreetype is F')
  })

  // Always make sure to end your test block
  t.end()
})
