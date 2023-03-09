// Create a function that takes another function as its argument.  Have the function execute the passed function.
let func1 = function(func)
{
    func();
}

func1(function(){
    console.log("pkay");
})
// Create a function that returns a function.  Have the returned function be executed.

let func2 = function()
{
    return (function(){
        console.log("okay");
    })();
}

func2();

// Create a function that takes two functions as its arguments.  Randomly, either execute the first function or the second function.
let func3 = function(func1, func2)
{
    let rand = Math.floor(Math.random() * 2) + 1;
    arguments[rand-1]();
}

func3(func2, function(){
    console.log("picked");
});