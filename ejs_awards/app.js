let express = require("express");
let app = express();
let port = 8000;
let awards = [
    {
        title: "Proficient in Web Fundamentals",
        path: "/images/web.png",
        date: "January 21, 2023",
        awardedby: "Lenard Cordial",
        tech: ["HTML","CSS","LESS","Bootstrap","JQuery","SQL","ERD"]
    },
    {
        title: "Proficient in Advanced PHP",
        path: "/images/php.png",
        date: "February 17, 2023",
        awardedby: "Lenard Cordial",
        tech: ["PHP","OOP","ORM","CodeIgniter","Ajax"]
    }
];

app.use(express.static(__dirname));
app.set("views", __dirname+"/views/");
app.set("view engine", "ejs");

app.get("/awards",function(request, response)
{
    response.render("awards");
})
app.get("/php",function(request, response)
{
    response.render("details", {details: awards[1]});
})
app.get("/web-fundamentals", function(request, response)
{
    response.render("details", {details: awards[0]});
})

app.listen(port, function(request, response)
{
    console.log("Listening to port "+port);
})