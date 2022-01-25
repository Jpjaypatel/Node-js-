var fs = require('fs')
fs.writeFile('jay.txt', 'Hello World', function (err){
    if(err) throw err;
    console.log("File created:....")
});