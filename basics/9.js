var http = require('http');
var urls = process.argv.slice(2);
var total = urls.length;
var responses = {
    0: "",
    1: "",
    2: ""
};

var weAreDone = function (responses) {
    var counter = 0;
    for (response in responses) {
        if (responses[response] !== "") counter++;
    }

    return (counter === total);
}

urls.forEach(function(url) {

    var responseBuffer = [];

    http.get(url, function (response) {

        response.setEncoding('utf8');

        response.on("data", function (chunk) {
            responseBuffer.push(chunk);
        });

        response.on("end", function () {
            responses[urls.indexOf(url)] = responseBuffer.join('');

            if (weAreDone(responses)) {
                console.log(responses[0]);
                console.log(responses[1]);
                console.log(responses[2]);
            }
        });

    });


});



/*
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
*/
