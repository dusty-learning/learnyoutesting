var test = require('tape')
var WeatherAdmin = require('./index')
var fs = require('fs')

test('Test weather admin', function (t) {
  var instance = new WeatherAdmin()

  // Because we needed an extra wrapper lets call a function that calls the constructor for a user
  // This for some reason automatically created and call the weather while also saving it to the file
  instance.newUserSearch('local', 'Cleveland, OH')

  // Take a gander at our .txt and make sure there's at least something there

  fs.readFile('./examples/02-week11-example/weather-admin/log.txt', 'utf8', function (error, data) {
    t.notOk(error, 'Make sure there is no error feedback')
    t.ok(data.length, 'There is indeed something there')
  })

  // Make sure we end our test
  t.end()
})
