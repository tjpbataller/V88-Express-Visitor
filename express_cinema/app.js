let express = require("express");
let app = express();
let port = 8000;

app.get("/",function(request, response)
{
    console.log(__dirname);
    app.use(express.static(__dirname+"/static"));
})

app.listen(port, function()
{
    console.log("listening to port "+port);
})