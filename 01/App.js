const fs = require('fs');
// Delete/create directiroies;
fs.mkdir('stuff', ()=>{
    fs.readFile('readMe.txt', 'utf8', (err, data)=>{
        fs.writeFile('./stuff/writeMe.txt', data); //no callback just learning
    });
});
fs.unlink('./stuff/writeMe.txt', ()=>{
    fs.rmdir('stuff'); //requires callback function
});
