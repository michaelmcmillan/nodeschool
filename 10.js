var net = require('net')
var strftime = require('strftime')

var server = net.createServer(function (socket) {
    socket.write(strftime('%F %H:%M\n', new Date())) // => 2011-06-07 18:51:45
    socket.end();
}).listen(process.argv[2]);


/*

*/
