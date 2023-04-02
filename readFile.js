//Asyncronous opening and writing out contents of file
//load http module
var http=require('http');
var fs=require('fs');
//create http server
http.createServer(function(req,res)
	{
	//open and read file 'HelloWorld.js'
	fs.readFile('HelloWorld.js','utf8',function(err,data)
		{
		res.writeHead(200,{'Content-Type':'text/plain'});
		if (err)
			res.write('Could not find or open file for reading\n');
		else
			//if no error display file data
			res.write(data);
		res.end();
		});
	}).listen(8000,function() {console.log('Bound to port 8000');});
console.log('Server running at port 8000');
