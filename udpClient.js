//UDP/Datagram Client
var dgram=require('dgram');
var client=dgram.createSocket('udp4');
//prepare for user input from terminal
process.stdin.resume();
//Send user input to server
process.stdin.on('data',function(data)
	{
	console.log(data.toString('utf8'));
	client.send(data,0,data.length,8000,'learningnode.net',
		function(err,bytes)
			{	
			if (err)
				console.log('Error: ' + err);
			else
				console.log('Successful');
			})
	});