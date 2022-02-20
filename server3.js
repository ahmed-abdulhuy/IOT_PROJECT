var http = require("http")
var fs = require("fs")
var path = require("path")
var proj = require("./ledBlink")

// var hostname = "192.168.1.2"
// var port = 1804

var hostname = "localhost"
var port = 3000


var server = http.createServer(function(req, res){
    console.log('Request for' + req.url + 'by method' + req.method);
    if (req.method == 'GET') {
        var fileurl;
        if(req.url == '/') fileurl = "./index.html";
        else fileurl = req.url
        var filepath = path.resolve(fileurl);
        var fileExt = path.extname(filepath);
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
    else if(req.method == 'POST') {
        var action = ""
        if(req.url == "./runProj"){
            proj.periodicActivity()
        } else if (req.url == "./stopProj") {
            proj.stop()
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


