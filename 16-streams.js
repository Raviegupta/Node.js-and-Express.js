const { createReadStream } = require('fs');

const stream = createReadStream('content/big.txt', );
console.log(stream);

// by default size of buffer :- 64kb
// (we can also control it and the way  we do that by passing in the object when we are setting up create read stream, 
// first argument is path, second arg is object, 'HighWaterMark' is the prop which controls the size of the buffer has the name )
// last buffer - remainder
// highWaterMark - control size


// const stream = createReadStream('content/big.txt', { 
//     highWaterMark: 90000,
//     encoding: 'utf-8',
//  })

// stream.on('data', (result) => {
//     console.log(result);
// })

// stream.on('error', (err) => console.log(err));


