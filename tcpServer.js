//A simple TCP Server with a socket listening for client communication on port 8000
var net=require('net');
var server=net.createServer(function(conn)
	{
	console.log('Server Connected');
	conn.on('data',funtion(data)
		{
		console.log(data + 'from ' + conn.remoteAddress + ' ' + conn.remotePort);
		conn.write('Repeating: ' + data);
		});
	conn.on('close',function()
		{
		console.log('Client closed the connection');
		});
	}).listen(8000);
console.log('Listening on port 8000');