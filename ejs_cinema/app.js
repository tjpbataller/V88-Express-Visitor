let express = require("express");
let app = express();
let port = 8000;

app.use(express.static(__dirname));
app.set("views",__dirname+"/views/");
app.set("view engine","ejs");

app.get("/",function(request, response)
{   
    response.render("index");
})
app.get("/movies",function(request, response){
    response.render("movies")
});
app.get("/movies/new",function(request, response){
    response.render("form");
});
app.get("/theaters",function(request, response){
    response.render("theaters")
});

app.listen(port, function(request, response){
    console.log("listening to port ", port);
});