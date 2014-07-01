var static = require('node-static');
var fileServer = new static.Server('.');

var server = require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    fileServer.serve(request, response);
  }).resume();
});
server.listen(3000);

var io = require('socket.io').listen(4000);
io.sockets.on('connection', function(socket) {
  console.log("connected");
});
