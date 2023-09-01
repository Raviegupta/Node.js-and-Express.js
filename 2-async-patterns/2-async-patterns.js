// Set up Promises

const { readFile, writeFile } = require('fs');
const { result } = require('lodash');


const getText = (path) => {
    return new Promise((resolve, reject) => {

        readFile(path, 'utf-8', (err, data) => {
            if(err) {
                console.log(err)
                return err;
            } else {
                resolve(data);
            }
        })

    })
}

getText('../content/first.txt')
  .then(result => console.log(result))
  .catch(err => console.log(err))

// Note :- If I we have to perform again 2 read files and then eventually write the file as well and if I would want
// to do all of that asynchronously it's still going to be pain just by using the Promises.

// so what would be the solution ??
// Since I am returning a Promise, If I use async await I can await till promise is settled and then decicde what 
// I would want to do, and the way we set that one up is by creating a new function. 

// Remember, those functions we are about to set-up are going to be provided to us, so we will just attach that 
// async to the callback functions that already provided us by the libraries.

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// Refactot to Async
const start = async() => {
    const first = await getText('../content/first.txt');
    console.log(first);
}
start();

// everytime we have this async await approach, what we want is to wrap this in the try catch block, so if something goes 
// wrong then we have atleast a little bit of control over it, so we will set up try catch block and then I will set up my
// first await & eventually we'll add here more and then in the error I will simply go with console.log(err)

const start2 = async() => {
    try {
        const first = await getText('../content/first.txt');
        console.log(first);
    } catch (err) {
        console.log(err)
    }
}
start2();


// read two file & write both in single file.
const start3 = async () => {
    try {
        const first = await getText('../content/first.txt');
        const second = await getText('../content/second.txt');
        console.log(first, second)

    } catch (err) {
        console.log(err);
    }
 }
 start3()

    
