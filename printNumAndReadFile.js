//New Service that print the numbers 1 to 100 and read contents of file
//load modules
var http=require('http');
var fs=require('fs');
//func to print out numbers
function printnum(res)
	{
	var counter=0;
	//increment global,write to client
	for (var i=0,i<100,i++)
		{
		counter++;
		res.write(counter.toString() + '\n');
		}
	}
//create http server