var http = require('http'),
	httpProxy = require('http-proxy'),
	sys = require('sys');

var routes = {};

routes['osbrew.com'] = 'osbrew.com';
routes['www.osbrew.com'] = 'osbrew.com';
routes['kyngster.com'] = 'kyngster.com';
routes['www.kyngster.com'] = 'kyngster.com';
routes['ellsworthwellandpump.com'] = 'ellsworthwellandpump.com';
routes['www.ellsworthwellandpump.com'] = 'ellsworthwellandpump.com';
routes['marionflywheels.com'] = 'marionflywheels.com';
routes['www.marionflywheels.com'] = 'marionflywheels.com';
routes['tims.kyngster.com'] = 'rims.kyngster.com';
routes['test.kyngster.com'] = 'test.kyngster.com';


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
        case 'ellsworthwellandpump.com':
			proxy.proxyRequest(req, res, {
				host: 'localhost',
				port: 3002
			});
		break;
        case 'marionflywheels.com':
			proxy.proxyRequest(req, res, {
				host: 'localhost',
				port: 3010
			});
		break;
        case 'rims.kyngster.com':
			proxy.proxyRequest(req, res, {
				host: 'localhost',
				port: 3004
			});
		break;
        case 'test.kyngster.com':
			proxy.proxyRequest(req, res, {
				host: 'localhost',
				port: 4130
			});
		break;
		default:
			proxy.proxyRequest(req, res, {
				host: 'localhost',
				port: 3000
			});
			break;
	}

}).listen(80);

var fourOfour = http.createServer(function(req, res) {
	res.writeHead(404, { 'Content-Type': 'text/plain' });
	res.end('404 Page not found');
}).listen(8000);










// var s = httpProxy.createServer({
// 	hostnameOnly: true,
// 	router: {
// 		'osbrew.com': '127.0.0.1:300',
// 		//'www.osbrew.com': '127.0.0.1:3000',
// 		'kyngster.com': '127.0.0.1:3001'
// 		//'www.kyngster.com': '127.0.0.1:3001'
// 	}
// }).listen(80);
