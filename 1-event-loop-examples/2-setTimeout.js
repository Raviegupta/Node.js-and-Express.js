console.log('first');

setTimeout(() => {
    console.log('second');
}, 0)

console.time();
for(let i = 0; i < 10; i++) {
    console.log(i);
}
console.timeEnd();

console.log('third');



// output :- ????

// setTimeout is an api which is provided by the browser.
// so, we can offload the time consuming operations to the browser.
// that doesn't mean that we can offload for loops, 
// it means that browser does provide some apis where we don't have to write the blocking code.

// we can't offload for loops why ?:- it means we can still write blocking code in javascript but browser does provide
// some nice apis where we can offload those time consuming tasks and tthat brings us to our main friend the 
// Node Js Event loop.


// EVENT LOOP:- what event loop does ?
// it registers the callback and only when the operation is complete it executes it, (we are not executing right away)
// we run our immediate code first and only then when we have the time, we execute the callback.

// Why EVENT LOOP Best Friend ? 
// bcoz with the help of event loop we can offload some time consuming operations and effectively just keep all our users happy.
