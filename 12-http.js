const http = require('http');

// basics
// const server = http.createServer((req, res) => {
//     console.log(req);
//     res.write('Welcome to our Home Page');
//     res.end();
// })

const server = http.createServer((req, res) => {  
    if(req.url === '/') {
        res.end('Welcome to our Home Page');
    }
    else if(req.url === '/about') {
        res.end('ABOUT US');
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href= "/">back to Home</a>
        `);
    }    
})


server.listen(5000);
