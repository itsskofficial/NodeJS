//Domain Resolution
//look for ip address
var dns=require('dns');
dns.lookup('facebook.com',function(err,ip)
	{
	if(err)
		throw err;
	console.log(ip);
	});
//return domain names for an ip address
dns.reverse('173.292.929.292',function(err,domains)
	{
	if (err) 
		throw err;
	domains.forEach(function(domain)
		{
		console.log(domain);
		});
	});
//return array of record types of server names
dns.resolve('instagram.com','A',function(err,domains)
	{
	if (err)
		throw err;
	domains.forEach(function(domain)
		{
		console.log(domain);
		});
	});
