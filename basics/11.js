var http = require('http')
var fs   = require('fs');

var server = http.createServer(function (req, res) {
    fs.createReadStream(process.argv[3], function (err, buf) {
        var body = buf.toString();
        console.log(body);
    });
}).listen(process.argv[2]);
