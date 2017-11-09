var server = require('http').createServer();
var io = require('socket.io')(server);

io.on('connection', function(client){
	console.log('Un nuevo cliente');
	client.emit('message', 'Hola!');
});


server.listen(3000);
