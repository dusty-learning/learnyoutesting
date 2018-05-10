// So let's take a gander at a nicely testable library of code

var extend = function () {
  var args = Array.prototype.slice.call(arguments)

  return args.reduce((acc, x) => {
    let key = ''

    for (key in x) {
      acc[key] = x[key]
    }

    return acc
  }, {})
}

var validationLibrary = function (options) {
  var defaults = {
    max: 20,
    min: 0
  }
  // Override our defaults with options that are passed in
  var opts = extend(defaults, options)

  var isNumber = function (val) {
    return !isNaN(val)
  }

  // Some crude logic validation
  var validateOptions = function () {
    if (!isNumber(opts.max)) {
      opts.max = defaults.max
    }

    if (!isNumber(opts.min)) {
      opts.min = defaults.min
    }
  }

  var aboveMin = function (val) {
    return isNumber(val) && Number(val) > opts.min
  }

  var belowMax = function (val) {
    return isNumber(val) && Number(val) < opts.max
  }

  var withinLimit = function (val) {
    return isNumber(val) && Number(val) < opts.max && Number(val) > opts.min
  }

  validateOptions()

  return {
    isNumber: isNumber,
    aboveMin: aboveMin,
    belowMax: belowMax,
    withinLimit: withinLimit
  }
}

module.exports = validationLibrary
