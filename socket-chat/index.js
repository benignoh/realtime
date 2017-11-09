var server = require('http').createServer();
var io = require('socket.io')(server);

io.on('connection', function(client){

	console.log('Un nuevo cliente');

	client.on('chat-message', function(msg){
		console.log('message:', msg);
		io.emit('chat-message', msg); // vamos a enviar a todos
		// client.emit('chat-message', msg); // vamos a enviar a uno
	});
});


server.listen(3000);

