var http = require('http');

http.get(process.argv[2], function (response) {

    var buffer = [];
    response.setEncoding('utf8');
    response.on("data", function (data) {
        buffer.push(data.toString());
    });

    response.on("end", function () {

        console.log(buffer.join('').length);
        console.log(buffer.join(''));
    });


});
