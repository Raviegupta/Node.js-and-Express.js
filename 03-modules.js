// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavour');
require('./07-mind-grenade');
// If we have a function inside of the module that we invoke, Yes that code will run even though we didn't assign to a variable.

console.log(names);
console.log(sayHi);
console.log(data.items);
console.log(data.singlePerson);

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

