module.exports = function () {
  
  var extend = function () {
    var args = Array.prototype.slice.call(arguments);
    
    return args.reduce((acc, x) => {
      let key = '';

      for (key in x) {
        acc[key] = x[key];
      }

      return acc;
    }, {});
  };

  var addOne = function (param) {
    if (!isNaN(param)) {
      return Number(param) + 1;
    };

    return 'Not a Number Type';
  };

  var addEach = function (array) {
    return array.map(val => {
      return addOne(val);
    });
  };

  return {
    extend: extend,
    addOne: addOne,
    addEach: addEach
  };
}