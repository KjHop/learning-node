const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', (req, res) =>{
     res.render('index');
});

app.get('/contact', (req, res) =>{
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, (req, res)=>{
    console.log(req.body);
    res.render('contact-success', {data: req.body});
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