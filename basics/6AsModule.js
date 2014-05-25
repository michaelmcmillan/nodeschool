module.exports = function (directory, filter, callback) {

    var fs = require('fs');
    var files = [];
    fs.readdir(directory, function (err, data) {

        if (err) return callback (err);

        data.forEach(function (file) {

            if (filter) {
                if (file.indexOf('.' + filter) !== -1) {
                    files.push(file);
                }
            }
            else
                files.push(file);
        });
        callback(err, files);
    });

}
