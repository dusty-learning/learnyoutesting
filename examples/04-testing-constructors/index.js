// If you are writing constructors, usually you will want to keep your data exposed as it travels through
// Your constructors methods so we set a data value that our methods will use
// There's two approaches to this, you can see them both below

// Applying the data as a piece of your constructor
// This makes it accessible to anyone under the .data property
// The drawback here is that this also makes it mutatable in any way
// Someone can just go and do myPlayer.data = 'cheese' and there is no stopping it
var Player = function (name, lvl) {
  this.title = ''
  this.name = name
  this.level = lvl

  this.gainLevel = function () {
    this.level += 1
  }

  this.updateTitle = function (title) {
    this.title = title
  }

  this.info = function () {
    return this.title + ' ' + this.name + ' Level: ' + this.level
  }
}

var Enemy = function (name, lvl) {
  var data = {
    title: '',
    name: name,
    level: lvl
  }

  // Using setters and getters you can keep your data local
  // But still be able to set and get data from your
  // Constructors, the draw back here is you need to
  // always call setData or getData to work with it
  // In this constructors case we only really need a getter
  this.getData = function (type) {
    if (type) {
      return data[type]
    }

    return data
  }

  this.gainLevel = function () {
    data.level += 1
  }

  this.updateTitle = function (title) {
    data.title = title
  }

  this.info = function () {
    return data.title + ' ' + data.name + ' Level: ' + data.level
  }
}

module.exports = {
  Player: Player,
  Enemy: Enemy
}
