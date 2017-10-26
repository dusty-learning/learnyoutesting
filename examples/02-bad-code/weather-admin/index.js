var fs = require("fs");
var UserSearch = require("./../user-search");

// This is a very good example of poorly written untestable code

var WeatherAdmin = function () {
  this.getData = function () {
    // This function is essentially useless as well, we can't really test anything here.
    // There is no feedback from our function, and fs isn't giving anything to it.
    fs.readFile("./examples/02-week11-example/weather-admin/log.txt", "utf8", function (error, data) {
      console.log(data);
    });
  };

  this.newUserSearch = function (name, location) {
    // Nothing in this function is obtainable, we can't actually test it.
    // A good example of untestable code is this. And I don't hate myself enough to test it

    // Even though it's calling this constructor, we can't see if it is actually successfully created
    // We can actually only hope it is there
    var newUserSearch = new UserSearch(name, location);
    // We don't ever see this besides the .txt file, did it get concated correctly? We may never know!
    var logTxt =
      "\nName: " + newUserSearch.name + " Location: " + newUserSearch.location + " Date: " + newUserSearch.date;

    // This is an asynchronous function without a callback. There's not much to say about that.
    fs.appendFile("./examples/02-week11-example/weather-admin/log.txt", logTxt); // <-- This is actually depricated

    // I actually don't know why this is a thing, reasons I guess
    newUserSearch.getWeather();
  };
};

module.exports = WeatherAdmin;
