//Timer to open file and read contents to HTTP response object
var http=require('http');
var fs=require('fs');
function openAndReadFile(filename,res)
	{
	console.log('Opening: ' + filename);
	//open and read in file contents
	fs.readFile(filename,'utf8',function(err,data)
		{
		if (err)
			res.write('Error in opening file for reading!');
		else
			res.write(data);
		//response is done
		res.end();
		}
	}
var timeout=setTimeout(openAndReadFile,2000,filename,res);
clearTimeout(timeout);