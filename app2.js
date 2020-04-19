var fs = require('fs');
fs.unlink('Writeme.txt', function(err) {
    if (err) throw err;
    console.log("File 1 Deleted");
});
fs.unlink('Writeme2.txt', function(err) {
    if (err) throw err;
    console.log("File 2 Deleted");
});
fs.rmdirSync('Stuff', { recursive: false }, () => {
    console.log("Directory Stuff Deleted");
});