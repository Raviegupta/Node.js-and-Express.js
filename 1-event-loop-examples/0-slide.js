// JAVASCRIPT IS SYNCHRONOUS AND SINGLE THREADED

console.log('first task');

console.time();
for(let i = 0; i < 1000; i++) {
    const h3 = document.querySelector('h3');
    h3.innerHTML = `Hey everyone is waiting on me`;
}
console.timeEnd();

console.log('next task');


// output:- ???