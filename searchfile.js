//Using child processes to find files in subdirectories witha given search term 'test'
var spawn=require('chile_process').spawn,
	find=spawn('find',['.','-ls']),
	grep=spawn('grep',['test']);
grep.stdout.setEncoding('utf8');
//direct results of find to grep
find.stdout.on('data',function(data)
	{grep.stdin.write(data);});
//now run grep and output results
grep.stdout.on('data',function(data)
	{console.log(data);});
//error handling for both
find.stderr.on('data',function(data)
	{console.log('find stderr: ' + data);});
grep.stderr.on('data',function(data)
	{console.log('grep stderr: ' + data);});
//exit  handling for both
find.on('exit',function(code)
	{
	if(code!==0)
		{console.log('find process ended with code ' + code);}
	//go ahead and end grep process
	grep.stdin.end();
	});
grep.on('exit',function(code)
	{
	if(code!==0)
		{console.log('grep process ended with code: ' + code);}
	});