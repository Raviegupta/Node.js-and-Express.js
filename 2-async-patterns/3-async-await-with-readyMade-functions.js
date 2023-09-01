// const { readFile, writeFile } = require('fs');

// const util = require('util');
// const readFilePronmise = util.promisify(readFile);
// const writeFilePronmise = util.promisify(writeFile);

//  const start4 = async () => {
//     try {
//         const first = await readFilePronmise('../content/first.txt', 'utf-8');
//         const second = await readFilePronmise('../content/second.txt', 'utf-8');

//         await writeFilePronmise('../content/result-mind-grenade.txt', `THIS IS AWSOME : ${first} ${second}`, 'utf-8' )
//         console.log(first, second);
//     } catch(error) {
//         console.log(error);
//     }
//  }

//  start4();




// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Technically we can even skip (util) part as well then just we have to just do .promises after the require('fs');
const { readFile, writeFile } = require('fs').promises;


 const start5 = async () => {
    try {
        const first = await readFile('../content/first.txt', 'utf-8');
        const second = await readFile('../content/second.txt', 'utf-8');

        await writeFile('../content/result-mind-grenade.txt', `THIS IS AWSOME : ${first} ${second}`, 'utf-8', {flag: 'a'})
        console.log(first, second);
    } catch(error) {
        console.log(error);
    }
 }

start5();
