var http = require('http'),
 	httpProxy = require('http-proxy');

var http = require('http'),
    httpProxy = require('http-proxy');

//
// Create a proxy server with custom application logic
//
httpProxy.createServer(function (req, res, proxy) {
  //
  // Put your custom server logic here
  //
  proxy.proxyRequest(req, res, {
    host: 'localhost',
    port: 3000
  });
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
