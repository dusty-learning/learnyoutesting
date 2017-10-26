var test = require('tape');
var characters = require('./index');

test('Test Player Creation', function (t) {
  var instance = new characters.Player('Fredrick', 1);

  t.ok(instance, 'Instance created okay');
  t.equal(instance.level, 1, 'Player is level 1');
  t.equal(instance.name, 'Fredrick', 'Players name is Fredrick');
  t.end();
});

test('Test Enemy Creation', function (t) {
  var instance = new characters.Enemy('Albert', 2);
  var info = instance.getData();

  t.ok(instance, 'Instance created okay');
  t.equal(info.level, 2, 'Enemy is level 2');
  t.equal(info.name, 'Albert', 'Enemys name is Albert');
  t.end();
});

test('Test player gainLevel Method', function (t) {
  var instance = new characters.Player('Fredrick', 1);

  t.ok(instance, 'Make sure the instance is okay');

  instance.gainLevel();
  t.equal(instance.level, 2, 'Fredrick is now level 2');

  t.end();
});

test('Test enemy gainLevel Method', function (t) {
  var instance = new characters.Enemy('Albert', 2);

  t.ok(instance, 'Make sure the instance is okay');

  instance.gainLevel();
  // Notice here we are doing .getData().level
  // Grabbing level right from the results of getData()
  t.equal(instance.getData().level, 3, 'Albert is now level 3');

  t.end();
});

test('Test Player updateTitle', function (t) {
  var instance = new characters.Player('Fred', 5);

  t.ok(instance, 'Instance created okay');

  // Since Fred is level 5, lets give him a title
  instance.updateTitle('Novice');
  // Let's see if our title stuck
  t.equal(instance.title, 'Novice', 'Freds title is now Novice');
  t.end();
});

test('Test Player updateTitle', function (t) {
  var instance = new characters.Enemy('Burt', 5);

  t.ok(instance, 'Instance created okay');

  // Since Fred is level 5, lets give him a title
  instance.updateTitle('Evil Novice');
  // Let's see if our title stuck
  t.equal(instance.getData().title, 'Evil Novice', 'Burts title is now Evil Novice');
  t.end();
});

test('Test Displaying all of players info', function (t) {
  var instance = new characters.Player('Fred', 4);

  t.ok(instance, 'Instance created okay');
  instance.gainLevel();
  instance.updateTitle('Novice');

  t.equal(instance.info(), 'Novice Fred Level: 5', 'Got back an info string');

  t.end();
});

test('Test Displaying all of enemys info', function (t) {
  var instance = new characters.Enemy('Gunther', 4);

  t.ok(instance, 'Instance created okay');
  instance.gainLevel();
  instance.updateTitle('Evil Novice');

  t.equal(instance.info(), 'Evil Novice Gunther Level: 5', 'Got back an info string');

  t.end();
});
