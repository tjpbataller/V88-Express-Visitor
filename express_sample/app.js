(function(){
    let express = require("express");
    let app = express();
    // console.log(app.get());

    app.set("views",__dirname + "/views");
    app.set("view engine","ejs");

    app.get("/justme",function(request, response)
    {
        var users_array = [
            {name: "Michael", email: "michael@codingdojo.com"},
            {name: "Jay", email: "jay@codingdojo.com"}, 
            {name: "Brendan", email: "brendan@codingdojo.com"}, 
            {name: "Andrew", email: "andrew@codingdojo.com"}
        ];
        response.render('users', {users: users_array});
    })

    app.listen(8000, function(){
        console.log("listening to port 8000");
    })
}())