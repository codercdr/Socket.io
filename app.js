var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);
	
server.listen(3000);

app.get("/",function(req,res){
	res.sendfile(__dirname + '/index.html');	
});
	
	
io.sockets.on('connection',function(socket){
	console.log('Bağlantı kuruldu...');
	socket.on('send message',function(data,callback){
		console.log('Mesaj alındı:' + data);
		io.sockets.emit('new message',data);
		
		callback(10);
	});
}); 