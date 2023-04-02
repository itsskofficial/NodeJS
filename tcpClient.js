//A TCP Client
var net=require('net');
var client=new net.Socket();
client.setEncoding('utf8');
//connect to server
client.connect('8000','localhost',function()
	{
	console.log('connected to server');
	client.write('Hiya!');
	});
//prepare for user input from terminal
process.stdin.resume();
//when receive data connect to server
process.stdin.on('data',function(data)
	{
	client.write(data);	
	});
//when receive data,print back to console
client.on('data',function(data)
	{
	console.log(`Server: ${data}\n`);	
	});
//when server closes the connection
client.on('close',function()
	{
	console.log(`Server: Bye`);
	});