const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Welcome');
// });

// setting server Using Event Emitter API
const server = http.createServer();
// emits request event
// subscribe to it / listen for it / respond to it

server.on('request', (req, res) => {
    res.end('Welcome : Server by Event Emitter API');
})


server.listen(5000);
