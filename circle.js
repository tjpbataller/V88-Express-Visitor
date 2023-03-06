//ES5 without prototype
function Circles(num)
{
    this.numberOfCircles = num;
    this.createCircle = function()
    {
        let randomSize = Math.floor(Math.random() * 50) + 1;
        let circleObj = document.createElement("div");

        //Circle size
        circleObj.style.width = randomSize+"px";
        circleObj.style.height = randomSize+"px";
        //decoration
        circleObj.style.borderRadius = randomSize/2+"px";
        circleObj.style.backgroundColor = "red";
        circleObj.style.display = "inline-block";
        circleObj.style.marginRight = 10+"px";
        
        return circleObj;
    }
    this.draw_circles = function(e)
    {
        let parent = document.getElementById(e);

        for(let i=0; i<this.numberOfCircles; i++)
        {
            let child = this.createCircle();
            parent.appendChild(child);
        }
    }
}
// ES5 with prototype
function Circles(num)
{
    this.numberOfCircles = num;
}
Circles.prototype.createCircle = function()
{
    let randomSize = Math.floor(Math.random() * 50) + 1;
    let circleObj = document.createElement("div");
    
    //Circle size
    circleObj.style.width = randomSize+"px";
    circleObj.style.height = randomSize+"px";
    //decoration
    circleObj.style.borderRadius = randomSize/2+"px";
    circleObj.style.backgroundColor = "red";
    circleObj.style.display = "inline-block";
    circleObj.style.marginRight = 10+"px";
    
    return circleObj;
}
Circles.prototype.draw_circles = function(e)
{
    let parent = document.getElementById(e);

    for(let i=0; i<this.numberOfCircles; i++)
    {
        let child = this.createCircle();
        parent.appendChild(child);
    }
}
//ES6
class Circles
{
    constructor(num)
    {
        this.numberOfCircles = num;
    }
    createCircle()
    {
        let randomSize = Math.floor(Math.random() * 50) + 1;
        let circleObj = document.createElement("div");

        //Circle size
        circleObj.style.width = randomSize+"px";
        circleObj.style.height = randomSize+"px";
        //decoration
        circleObj.style.borderRadius = randomSize/2+"px";
        circleObj.style.backgroundColor = "red";
        circleObj.style.display = "inline-block";
        circleObj.style.marginRight = 10+"px";
        
        return circleObj;
    }
    draw_circles(e)
    {
        let parent = document.getElementById(e);

        for(let i=0; i<this.numberOfCircles; i++)
        {
            let child = this.createCircle();
            parent.appendChild(child);
        }
    }
}