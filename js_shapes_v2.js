let color = "green";
let shape = "&#11044;";

class Shape
{
    constructor(x=0, y=0)
    {
        this.shape = shape;
        this.color = color;
        this.x = x;
        this.y = y;
    }
    create()
    {
        let newShape = document.createElement("span");
        let canvas = document.getElementById("canvas");
        newShape.innerHTML = this.shape;
        newShape.style.color = this.color;
        newShape.style.position = "absolute";
        let top = (this.y-100);
        let left = (this.x-50);
        newShape.style.top = top+"px";
        newShape.style.left = left+"px";
        newShape.style.width = 100+"px";
        newShape.style.height = 100+"px";
        let fontSize = 100;
        newShape.style.fontSize = fontSize+"px";
        let lineHeight = fontSize*0.75;
        newShape.style.lineHeight = lineHeight+"px";

        return newShape;
    }
    display(child)
    {
        let parent = document.getElementById("canvas");
        parent.appendChild(child);
    }
}
document.querySelectorAll("div#buttons button").forEach(function(element)
{
    element.addEventListener("click",function(event)
    {
        event.stopPropagation();
        let selectedBtn = this.id;
        let currentShape = document.getElementById("current");
        let canvas = document.getElementById("canvas");
        if(selectedBtn == "reset")
        {
            let defaultShapeElement = document.getElementsByName("default-shape")[0];
            currentShape.textContent = currentShape.getAttribute("data-non");
            currentShape.style.color = "black";
            currentShape.removeAttribute("id");
            defaultShapeElement.style.color = "green";
            defaultShapeElement.textContent = defaultShapeElement.getAttribute("data-curr");
            defaultShapeElement.setAttribute("id","current");
            canvas.innerHTML = "";
            return;
        }
        color = selectedBtn;
        currentShape.style.color = color;
    },false)
})
document.querySelectorAll("span").forEach(function(element)
{
    element.addEventListener("click",function(event)
    {
        event.stopPropagation();
        let currentShape = document.getElementById("current");
        currentShape.style.color = "black";
        currentShape.textContent = currentShape.getAttribute("data-non");
        currentShape.removeAttribute("id");
        this.setAttribute("id","current");
        this.style.color = color;
        this.textContent = this.getAttribute("data-curr");
        shape = this.textContent;
    })
})
document.getElementById("canvas").addEventListener("click",function(event)
{
    event.stopPropagation();
    let shape = new Shape(event.x, event.y);
    let newShape = shape.create();
    shape.display(newShape);
},false)