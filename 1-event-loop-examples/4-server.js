const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello World');
});

server.listen(5000, () => {
    console.log('Server listening on port : 5000...');
});


// here the process is alive bcoz :- listen is asynchronous and the moment we start it up the event loop is just 
// waiting for those requests to come in and then once they come in then ofcourse we run our callback.