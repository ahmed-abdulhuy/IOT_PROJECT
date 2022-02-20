let http = require("http")
let fs = require("fs")
let path = require("path")

let hostname = "localhost"
let port = 3000

let server = http.createServer(function(req, res){
    console.log('Request for' + req.url + 'by method' + req.method);
    if (req.method == 'GET') {
        let fileurl;
        if(req.url == '/') fileurl = 'index.html';
        else fileurl = req.url
        let filepath = path.resolve('public/'+fileurl);
        let fileExt = path.extname(filepath);
        if(fileExt == '.html') {
            fs.exists(filepath, function(exists) {
                if (!exists) {
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    res.end('<html><body><h1>Error 404: ' + fileurl+'</h1></body></html>')
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/html'})
                fs.createReadStream(filepath).pipe(res);
            })
        }
        else {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('<html><body><h1>Error 404: ' + fileurl+' not an html file</h1></body></html>')
        }
        
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<html><body><h1>Error 404: ' + req.method+' not supported</h1></body></html>')

    }
});

server.listen(port, hostname, function(){
    console.log('server running at http://'+hostname+':'+port)
});