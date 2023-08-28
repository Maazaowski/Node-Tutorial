//CommonJS, every file is a module (by default)
//Modules - Encapsulated code (only share minimum)

const names = require('./4-names')
//console.log(names)

const sayHi = require('./5-utils')
const data = require('./6-alternative-flavors')

//console.log(data)
//sayHi(names.name)
//sayHi(names.name2)

require('./7-mind-grenade')

