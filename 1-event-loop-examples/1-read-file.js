const fs = require('fs');

console.log('started a new task');

fs.readFile('../Content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result);
    console.log('completed first task');
})
console.log('starting next task');


// Event Lopp will offload the Asynchronous code