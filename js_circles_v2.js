let color = "green";
// ES5 with prototype
function Circle(color="green")
{
    this.height = 0;
    this.width = 0;
    this.x = 0;
    this.y = 0;
    this.color = color;
    this.display = function(x, y)
    {
        let randomSize = Math.floor(Math.random() * 100) + 1;
        let divParent = document.querySelector("#circles");
        let circObj = this;
        let newElem = document.createElement("div");
        this.width = randomSize;
        this.height = randomSize;
        this.x = x;
        this.y = y;
        
        this.create(newElem, divParent);
        let myInterval = setInterval(function(){
            circObj.width -= 5;
            circObj.height -= 5;
            circObj.create(newElem, divParent);
            if(circObj.width < 2)
            {
                newElem.parentElement.removeChild(newElem);
                clearInterval(myInterval);
            }
        },300)
    }
}

Circle.prototype.setColor = function(newColor)
{
    this.color = newColor;
}
Circle.prototype.create = function(newElem, divParent)
{
    newElem.style.width = this.width+"px";
    newElem.style.height = this.height+"px";
    newElem.style.backgroundColor = this.color;
    newElem.style.position = "absolute";
    newElem.style.top = (this.y - this.height/2) - 50 + "px";
    newElem.style.left = (this.x - this.width/2)+ "px";
    divParent.appendChild(newElem);
}

let circles = document.querySelectorAll("button");
for(let i=0; i<circles.length; i++)
{
    circles[i].addEventListener("click",function(e)
    {
        e.stopPropagation();
        color = this.getAttribute("id");
    },false)
}
let box = document.querySelector("#circles");
box.addEventListener("click",function(e)
{
    e.stopPropagation();
    let newCircle = new Circle(color);
    newCircle.display(e.x, e.y);
},false);