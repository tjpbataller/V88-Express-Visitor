let express = require("express");
let app = express();
let session = require("express-session");
let bodyParser = require("body-parser");
let port = 8000;

app.use(session({
    secret: "something", 
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));
app.set("views", __dirname+"/views");
app.set("view engine","ejs");

app.get("/",function(req, res)
{
    if(typeof req.session.num !== "undefined")
    {
        req.session.num++;
    }
    else
    {
        req.session.num = 1;
    }

    function showQuote(num)
    {
        return num%2==0?"Even flowers need rain":"Beat the odds";
    }

    res.render("index", {data: {
        num: req.session.num,
        quote: showQuote(req.session.num)
    }})
})
app.post("/reset",function(req,res)
{
    req.session.num = 0;
    res.redirect("/");
})
app.post("/repeat", function(req, res)
{
    req.session.num--;
    res.redirect("/");
})

app.listen(port);