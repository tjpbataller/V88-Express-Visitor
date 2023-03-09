var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response)
{
    console.log("requested url: ", request.url);

    if(request.url === '/')
    {
        fs.readFile('views/index.html','utf8',function(errors, contents)
        {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/movies')
    {
        fs.readFile('views/movies.html','utf8',function(errors, contents)
        {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/theaters')
    {
        fs.readFile('views/theaters.html','utf8',function(errors, contents)
        {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/movies/new')
    {
        fs.readFile('views/new_movies.html','utf8',function(errors, contents)
        {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === 'stylesheets/style.css')
    {
        fs.readFile('style.css','utf8',function(errors, contents)
        {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/poster1.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/poster1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/poster2.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/poster2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/poster3.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/poster3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cinema1.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cinema1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cinema2.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cinema2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cinema3.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cinema3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else
    {
        response.end("URL requested is not available");
    }
})

let port = 6485;

server.listen(port);

console.log("Listening to port.. "+port);