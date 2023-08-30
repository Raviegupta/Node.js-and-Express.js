setInterval(() => {
    console.log('hello world');
}, 2000);

console.log(`I will run first`);

// process stays alive unless we kill process :- CONTROL + C
// setInterval() is an Asynchronous, it runs in intervals (here 2 seconds), in every 2 seconds the 
// event loop is just gona invoke that callback that's why we are not exiting

