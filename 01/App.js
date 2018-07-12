const express = require('express');

const app = express();

app.get('/', (req, res) =>{
     res.send('Gitara siema');
});

app.get('/contact', (req, res) =>{
    res.send('Gitara siema!');
});

app.listen(8080);