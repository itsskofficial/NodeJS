//Hello World
//load http module
var http=require('http');
//create http server
http.createServer(function(req,res)
	{
	//content header
	res.write(200,{'content-type':'text/plain'});
	//write message and signal communication is complete
	res.end('Hello World!\n');
	}).listen(8000);
console.log('Server running on port 8000');