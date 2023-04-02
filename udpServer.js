//UDP/Datagram Server
var dgram=require('dgram');
var server=dgram.createSocket('udp4');
server.on('message',function(msg,rinfo)
	{
	console.log(`Client: ${msg} \n\t from ${rinfo.address}: ${rinfo.port});
	});
server.bind(8000);