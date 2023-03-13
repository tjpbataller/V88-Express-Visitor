let express = require("express");
let app = express();
let port = 8000;

app.get("/", function(req, res)
{
    res.render();
})
app.listen(port, function()
{
    console.log("Listening to port "+port);
})