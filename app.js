var fs = require('fs');
// SYNCHRONOUS WORKING WITH FILES...IT WAITS FOR OTHER BLOCK TO BE FINISHED
var Readme = fs.readFileSync('Readme2.txt', 'utf-8');
fs.writeFileSync('Writeme2.txt', Readme);
console.log("File 1 Written");

// ASYNCHRONOUS WORKING WITH FILES...IT DOES NOT WAIT FOR OTHER CODE TO BE EXECUTED
fs.readFile('Readme.txt', 'utf-8', function(err, data) {
    fs.writeFile('Writeme.txt', data, err => {});
});
console.log("File 2 Written");

// SYNCHRONOUS WORKING WITH DIRECTORIES
fs.mkdirSync('Stuff');
console.log("DIRECTORY STUFF CREATED");