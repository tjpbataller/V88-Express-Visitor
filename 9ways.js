/* 1 */
console.log("Hello world")

/* 2 */
let hello = "hello";
let world = "world";
class Obj{
    constructor(hello, world)
    {
        console.log(hello, world);
    }
}
let helloWorld = new Obj(hello, world);

/* 3 */
let message = "Hello world";
console.log(message);

/* 4 */
(function(){
    console.log("hello world");
})()
/* 5 */
let obj = {
    print: function(){
        console.log("hello world");
    }
}
obj.print();

/* 6 */
function funcobj(){
    console.log("hello world")
}
funcobj();

/* 7 */
function recur(hello, world, n)
{
    if(n == 0)
    {
        return console.log(hello, world);
    }
    return recur(hello, world, n-=1);
}   
recur(hello, world, 3);

/* 8 */
if(hello == "hello")
{
    console.log("hello world");
}

/* 9 */
let thisFunc = function(func)
{
    func();
}
thisFunc(funcobj);

/* 10 */
console.log(`${hello} ${world}`);