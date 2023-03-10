const fs = require('fs');
let mimes = {
    "css": {path:"../stylesheets/", type: "text/css"},
    "html": {path:"../views/", type: "text/html"},
    "js": {path:"./", type: "text/javascript"},
    "mp3": {path:"../media/", type:"audio/mpg"},
    "jpg": {path:"../images/", type:"image/jpeg"},
    "mp4": {path:"../media/", type:"video/mp4"},
    "ico": {path:"../images/", type:"image/vnd.microsoft.icon"},
    "png": {path:"../images/", type:"image/png"}
}
function getFile(request, r)
{
    let fileArr = [];
    let fileName = "";
    for(let x=request.url.length; x>0; x--)
    { 
        if(request.url[x-1] == r){break;}
        fileArr[fileArr.length] = request.url[x - 1];
    }
    for(let i=fileArr.length-1; i>=0; i--)
    {
        fileName += fileArr[i];
    }
    return fileName;
}
module.exports = function(request, response){

    let fileExt = getFile(request, ".");
    let mime = mimes[fileExt] || "";
    let fileFolder = mime.path || "";
    let filePath = fileFolder+getFile(request, "/");
    let fileType = mime.type || "text/html";
    if(request.url === "/"){
        filePath = "../views/index.html";
        fileType = "text/html";
    }
    fs.stat(filePath, function(err, stat)
    {
        if (err == null || request.url === "/") {
            console.log("exists");
            if(fileExt === "png" || "jpg" || "ico")
            {
                fs.readFile(filePath,function(errors, contents)
                {
                    if(!errors)
                    {
                        response.writeHead(200, {'Content-Type': fileType});
                        response.write(contents);
                        response.end();
                    }
                })
            }
            else
            {
                fs.readFile(filePath,'utf8',function(errors, contents)
                {
                    if(!errors)
                    {
                        response.writeHead(200, {'Content-Type': fileType});
                        response.write(contents);
                        response.end();
                    }
                })
            }
        }
        else
        {
            fs.readFile('../views/error.html', function(errors, contents){
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(contents);
                response.end();
            })
        }
    })
}

