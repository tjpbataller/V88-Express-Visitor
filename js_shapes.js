class Shape
{
    constructor(color="green", shape, x, y)
    {
        this.fontSize = 100;
        this.color = color;
        this.colorDefault = "black";
        this.shape = shape;
        this.x = x;
        this.y = y;
        console.log(this.x);
    }
    create(newElem)
    {
        divParent = document.getElementById("canvas");
        newElem.style.width = this.width+"px";
        newElem.style.height = this.height+"px";
        newElem.style.backgroundColor = this.color;
        newElem.style.position = "absolute";
        newElem.style.top = (this.y - this.height/2) - 50 + "px";
        newElem.style.left = (this.x - this.width/2)+ "px";
        divParent.appendChild(newElem);
    }
    display()
    {   
        let randomSize = Math.floor(Math.random() * 100) + 1;
        let circObj = this;
        let newElem = document.createElement("div");
        this.width = randomSize;
        this.height = randomSize;
        this.x = x;
        this.y = y;
        
        this.create(newElem);
        
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

document.querySelectorAll("button").forEach(function(el){
    el.addEventListener("click",function(e){
        e.stopPropagation();
        let elem = document.getElementById('current');
        let shape = new Shape;
        let color = this.getAttribute("id");

        if(el.getAttribute("id") == "reset")
        {
            let defElem = document.getElementsByName("default-shape")[0];
            elem.removeAttribute("id");
            elem.style.color = "black";
            elem.textContent = elem.getAttribute("data-non");
            defElem.style.color = "green";
            defElem.setAttribute("id", "current");
            defElem.textContent = defElem.getAttribute("data-curr");
            colored = "green";
            shape.color = colored;
            return;
        }
        colored = color;
        shape.color = colored;
        elem.style.color = shape.color;
    },false)
})

document.querySelectorAll("span").forEach(function(el){
    el.addEventListener("click",function(e)
    {
        e.stopPropagation();
        //get the current element
        let currElem = document.getElementById("current");
        //change the current element's innerhtml to data-non
        currElem.textContent = currElem.getAttribute("data-non");
        //changecolor
        currElem.style.color = "black";
        //remove id
        currElem.removeAttribute("id");
        //change the selected element's innerhtml to data-curr
        let currentShape = this.getAttribute("data-curr");
        this.textContent = currentShape
        //change the id to current
        this.setAttribute("id", "current");
        //get Shape class
        let shape = new Shape();
        //change color
        this.style.color = shape.color;
        //set shape to current
        shaped = currentShape;
        shape.shape = shaped;
    },false)
})

document.getElementById("canvas").addEventListener("click",function(e){
    let color = document.getElementById("current").getAttribute("")
    let obj = new Shape(e.offsetX, e.offsetY);
},false)