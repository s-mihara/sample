// copyして、あえてもう一個作成。で更新.さらに
var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200,{'Content-Type':'text/plain'} );
	res.end('Hello world\n');
}).listen(1337);
console.log('Server running at http://serverName:1337');

