const http = require('http');

// basics
const server1 = http.createServer((req, res) => {
    console.log(req);
    res.write('Welcome to our Home Page ...........');
    res.end();
})

const server2 = http.createServer((req, res) => {  
    if(req.url === '/') {
        res.write('Welcome to our Home Page');
        res.end();
    }
    else if(req.url === '/about') {
        res.write('ABOUT US');
        res.end();
    } else {
        res.write(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href= "/">back to Home</a>
        `);
        res.end();
    }    
})


server1.listen(5000);
server2.listen(5001);
