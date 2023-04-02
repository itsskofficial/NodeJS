//Creating a custom REPL that preloads modules
var repl=require('repl');
var context=repl.start(">>>",null,null,null,true).context;
//preload some modules
context.http=require('http');
context.fs=require('fs');
