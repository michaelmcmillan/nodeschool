var fs = require('fs');
var files = [];
fs.readdir(process.argv[2], function (err, data) {

    data.forEach(function (file) {

        if (process.argv[3]) {
            if (file.indexOf('.' + process.argv[3]) !== -1) {
                console.log(file);
            }
        }
        else
            console.log(file);
    });


});
