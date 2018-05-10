module.exports = function () {
  var doAdd = function (a, b) {
    return a + b
  }

  var doSubtract = function (a, b) {
    return a - b
  }

  return {
    doAdd: doAdd,
    doSubtract: doSubtract
  }
}
