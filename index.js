const http = require('http')
 

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello World")
    res.end();
}).listen(process.env.PORT || 5000)