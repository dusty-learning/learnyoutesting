var test = require('tape')
var titleize = require('../titleize')

test('Titleize basic functionality', function (t) {
  t.equal(titleize('steve smith'), 'Steve Smith', 'Capitalized initial letter of each word')
  t.equal(titleize('dr zhivago'), 'Dr. Zhivago', 'Appends period to title and capitalizes initial letter of each word')
  t.equal(titleize('Mr. Alexander Pushkin'), 'Mr. Alexander Pushkin', 'Should not affect already cased strings')
  t.equal(titleize('Mr Alexander Pushkin'), 'Mr. Alexander Pushkin', 'Appends period even with already cased words')
  t.equal(titleize('Mr ALEXANDER PushKIn'), 'Mr. Alexander Pushkin', 'Fixed mixed case words')
  t.end()
})
