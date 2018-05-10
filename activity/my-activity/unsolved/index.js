// Should return if a value is a number type strictly
// NOTE STRING NUMBERS SHOULD RETURN FALSE
var isNumber = function (x) {
  return Object.prototype.toString.call(x) === '[object Number]'
}

// Should return if a value is a string type strictly
var isString = function (x) {
  return Object.prototype.toString.call(x) === '[object String]'
}

// Helper function you can ignore it since it isn't being passed along to be tested
var nth = function (offset, list) {
  var idx = offset < 0 ? list.length + offset : offset

  return isString(list) ? list.charAt(idx) : list[idx]
}

// Grabs the last index of the given value
var last = function (x) {
  return nth(-1, x)
}

// Should return true or false based on if the given object contains the prop entered
var has = function (obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}

// Should increment the value by one, or return the value if it isn't a number
var increment = function (val) {
  if (!isNaN(val)) {
    return Number(val) + 1
  }

  return val
}

// Should take all the values of the array and add them together
// Should skip letters or non numerals in the array
var sum = function (val) {
  if (Array.isArray(val)) {
    return val.reduce(function (a, v) {
      if (isNumber(v)) {
        return a + Number(v)
      }

      return a
    })
  }

  return val
}

// Should take any number of numerical arguments and get their mean value
var mean = function () {
  var args = Array.prototype.slice.call(arguments)
  var len = args.length
  var total = args.reduce(function (a, v) {
    return a + v
  })

  return total / len
}

// Should take the two params passed in and create a range from one number to the next
var range = function (from, to) {
  if (!isNumber(from) && !isNumber(to)) {
    return 'Both arguments to range must be numbers'
  }
  var result = []
  var n = from

  while (n < to) {
    result.push(n)
    n += 1
  }

  result.push(to)

  return result
}

// Should return the type of the value passed in no matter what
var type = function (x) {
  if (x === null) {
    return 'Null'
  }
  if (x === undefined) {
    return 'Undefined'
  }

  return Object.prototype.toString.call(x).slice(8, -1)
}

// Should perform a check to see if the two values passed in are identical
// Only SIMPLE values, no complex ones
var identical = function (a, b) {
  if (a === b) {
    // +0 !== -0
    return a !== 0 || 1 / a === 1 / b
  }

  // NaN === NaN
  return a !== a && b !== b
}

// Should return back the name of a function passed in
var functionName = function (f) {
  var match = String(f).match(/^function (\w*)/)

  return match == null ? '' : match[1]
}

// Should ensure the value passed in is an array no matter what
// Even if the value is falsey or undefined.
// Should always return an array
var ensureArray = function (val) {
  if (Array.isArray(val)) {
    return val
  }

  if (val === void 0) {
    return []
  }

  return [val]
}

// These are the functions being passed back in an object
// These are what you should be testing
module.exports = {
  isNumber: isNumber,
  isString: isString,
  last: last,
  increment: increment,
  sum: sum,
  mean: mean,
  range: range,
  type: type,
  identical: identical,
  has: has,
  functionName: functionName,
  ensureArray: ensureArray
}
