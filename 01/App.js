const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', (req, res) =>{
     res.render('index');
});

app.get('/contact', (req, res) =>{
    res.render('contact');
});

app.get('/profile/:id', (req, res) =>{
    let data = {
        age: 29,
        job: 'junior js dev',
        hobbies: ['eating', 'fishing', 'gaming']
    }
    res.render('profile', {
        person: req.params.id,
        data: data
    });
});

app.listen(8080);