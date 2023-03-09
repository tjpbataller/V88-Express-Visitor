const fs = require('fs');
let mimes = {
    "css": {path:"../stylesheets/", type: "text/css"},
    "html": {path:"../views/", type: "text/html"},
    "js": {path:"./", type: "text/javascript"},
    "mp3": {path:"../media/", type:"audio/mpg"},
    "jpg": {path:"../images/", type:"image/jpeg"},
    "mp4": {path:"../media/", type:"video/mp4"},
    "ico": {path:"../images/", type:"image/vnd.microsoft.icon"}
}
function getExt(request)
{
    let urlArr = [];
    let extension = "";
    for(let x=request.url.length; x>0; x--)
    { 
        if(request.url[x-1] == "."){break;}
        urlArr[urlArr.length] = request.url[x - 1];
    }
    for(let i=urlArr.length-1; i>=0; i--)
    {
        extension += urlArr[i];
    }
    return extension;
}
function getFile(request)
{
    let fileArr = [];
    let fileName = "";
    for(let x=request.url.length; x>0; x--)
    { 
        if(request.url[x-1] == "/"){break;}
        fileArr[fileArr.length] = request.url[x - 1];
    }
    for(let i=fileArr.length-1; i>=0; i--)
    {
        fileName += fileArr[i];
    }
    return fileName;
}
module.exports = function(request, response){
    let fileExt = "";
    let filePath = "";
    let fileType = "";
    let fileFolder = "";
    if(request.url === "/"){
        filePath = "../views/index.html";
        fileType = "text/html";
    }
    else
    {
        fileExt = getExt(request);
        fileFolder = mimes[fileExt].path;
        filePath = fileFolder+getFile(request);
        fileType = mimes[fileExt].type;
        
    }
    fs.stat(filePath, function(err, stat)
    {
        if (err == null || request.url === "/") {
            fs.readFile(filePath,'utf8',function(errors, contents)
            {
                response.writeHead(200, {'Content-Type': fileType});
                response.write(contents);
                response.end();
            })
        } else if (err.code === 'ENOENT') {
            fs.readFile('views/error.html','utf8',function(errors, contents)
            {
                response.writeHead(200, {'Content-Type': "text/html"});
                response.write(contents);
                response.end();
            })
        } else {
            console.log('Some other error: ', err.code);
        }
    })
}

