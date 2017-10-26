module.exports = function () {
  
  var extend = function () {
   return arguments.reduce((acc, x) => {
      let key = '';

      for (key in x) {
        acc[key] = x[key];
      }

      return acc;
    }, {});
  }

  var addOne = function (param) {
    if (!isNaN) {
      return Number(param) + 1;
    };

    return 'Not a Number Type';
  }

  return {
    extend: extend
  };
}