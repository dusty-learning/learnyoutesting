var disemvowel = require('../disemvowel')
var test = require('tape')

test('Disemvowel Basic Functionality', function (t) {
  t.equal(disemvowel('this is lowercase'), 'ths s lwrcs', 'Removed all of the vowels')
  t.equal(disemvowel('THIS IS UPPERCASE'), 'THS S PPRCS', 'Removed vowels and kept casing')
  t.equal(disemvowel('this IS mixed'), 'ths S mxd', 'Removed vowels and kept mixed casing')
  t.equal(disemvowel('this IS mixed and has 2 NUMBERS 92'), 'ths S mxd nd hs 2 NMBRS 92', 'Removed Vowels and kept mixed and numbers')
  t.equal(disemvowel(10925), '10925', 'Simply returned numbers as strings when given just numbers')
  t.end()
})
