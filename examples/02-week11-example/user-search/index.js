var weather = require("weather-js");

// This code in it's main sense, is pretty terrible to test
// Constructors can be pretty difficult especially like this one here because of scope
// We won't ever know the results of
var UserSearch = function (name, location) {
  this.name = name;
  this.location = location;
  this.date = Date.now();

  this.getWeather = function (cb) {
    // In order to actually see our results we have to force the find to call our outside callback with data.
    // In a real world setup this might be less than desireable of an outcome.
    weather.find({ search: this.location, degreeType: "F" }, cb);
  };

};

module.exports = UserSearch;
