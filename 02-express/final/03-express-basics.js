const express = require('express');
const app = express();

// or we can also write like this
// const app = require('express')();


app.get('/', (req, res) => {
    console.log('user hit the response');
    res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
    res.status(200).send('About Page');
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>resourse not found</h1>');
})


app.listen(5000, () => {
    console.log('server is listening on port 5000');
})



// Methods we will use the most are :- 
// -----------------------------------
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.useapp.listen