var http = require('http'),
	httpProxy = require('http-proxy');

var s = httpProxy.createServer({
	hostnameOnly: true,
	router: {
		'osbrew.com': '127.0.0.1:300',
		'www.osbrew.com': '127.0.0.1:3000',
		'kyngster.com': '127.0.0.1:3001',
		'www.kyngster.com'" '127.0.0.1:3001"
	}
}).listen(80);
