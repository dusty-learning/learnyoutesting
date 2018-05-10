var titleize = function (name) {
  var titleCase = function (n) {
    return n.charAt().toUpperCase() + n.slice(1)
  }

  var transformTitle = function (userTitle) {
    if (userTitle.indexOf('.') === -1) {
      return userTitle + '.'
    }

    return userTitle
  }

  return name.split(' ').map(function (n) {
    var titles = ['mr', 'dr', 'ms', 'mrs']
    var val = n.toLowerCase()

    if (titles.indexOf(val) !== -1) {
      return titleCase(transformTitle(val))
    }

    return titleCase(val)
  }).join(' ')
}

module.exports = titleize
