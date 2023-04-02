//Url processing
//url parsing
var url=require('url');
var urlObj=url.parse('www.facebook.com');
console.log(urlObj);
var qs=urlObj.query;
console.log(qs);
//return the original url
var orig_url=url.format(urlObj););
//chunk key/value pairs in the query string
var querystring=require('querystring');
var vals=querystring.parse('file=main&file=secondary&type=html');
console.log(vals.file[0]);
//convert obj into query
var qryString=querystring.stringify(vals);
console.log(qryString);