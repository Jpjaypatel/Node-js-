var fs = require('fs');
fs.unlink('lx.txt', function(err){
    if(err) throw err;
    console.log("Your file is deleted")
});