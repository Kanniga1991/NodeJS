const fs = require("fs");
//readFile is to read any file in this folder(filename, coding , time interval)
fs.readFile('duplicate.js', 'utf8', function(err, data){
console.log(data); // displays all the lines in the file duplicate.js
});
fs.readFile('style.css', 'utf8', function(err, data){
console.log(data); // displays all the lines in the file duplicate.js
});
//writeFile is to create ne file ans you can erite there . the awesome.js is created through this syntax
fs.writeFile("awesome.js", "console.log('Awesome !!')" , function (err){
    console.log("Completed Writing")
});
