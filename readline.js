//Using ReadLine to create a simple command-driven user interface
var readline=require('readline');
//create a new interface
var interface=readline.createInterface(process.stdin,process.stdout,null);
//ask question
intercace.question('>>What is a billionaire?',function(answer)
	{
	console.log('About a billionaire you said: ' + answer);
	interface.setPrompt('>>');
	interface.prompt();
	});
//function to close interface
function closeInterface()
	{
	console.log('Leaving interface...');
	process.exit();
	}
//listen for .leave
interface.on('line',function(cmd)
	{
	if (cmd.trim()=='leave')
		{
		closeInterface();
		return;
		}
	else
		{
		console.log(''Repeating command:  " + cmd);
		}
	interface.setPrompt('>>');
	interface.prompt();
	});
interface.on('close',function()
	{closeInterface();});