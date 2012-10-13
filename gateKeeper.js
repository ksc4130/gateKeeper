var http = require('http'),
	httpProxy = require('http-proxy'),
	sys = require('sys');

var routes = {};

routes['osbrew.com'] = 'osbrew.com';
routes['www.osbrew.com'] = 'osbrew.com';
routes['kyngster.com'] = 'kyngster.com';
routes['www.kyngster.com'] = 'kyngster.com';

httpProxy.createServer(function (req, res, proxy) {
	console.log(sys.inspect(req.headers.host));
	var h = routes[req.headers.host];
	switch(h)
	{
		case 'osbrew.com': 
			proxy.proxyRequest(req, res, {
				host: 'localhost',
				port: 3000
			});
			break;
		case 'kyngster.com':
			proxy.proxyRequest(req, res, {
				host: 'localhost',
				port: 3001
			});
		break;
	}

}).listen(80);










// var s = httpProxy.createServer({
// 	hostnameOnly: true,
// 	router: {
// 		'osbrew.com': '127.0.0.1:300',
// 		//'www.osbrew.com': '127.0.0.1:3000',
// 		'kyngster.com': '127.0.0.1:3001'
// 		//'www.kyngster.com': '127.0.0.1:3001'
// 	}
// }).listen(80);
