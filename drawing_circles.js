let generateSize = function(circSize = 100){
    size = Math.floor(circSize);
    randomSize = Math.floor(Math.random() * (size) + 1);
    return randomSize;
}
let circle = {
    size: generateSize(),
    x: size,
    y: size,
    color: "green"
}
let boxes = document.getElementsByTagName("button");

document.getElementById("boxes").addEventListener("click", function(e){
    e.stopPropagation;

    circle.size = generateSize();
    circle.x = circle.size/2;
    circle.y = circle.size/2;
    let x = e.clientX - circle.x;
    let y = e.clientY - 50 - circle.y;
    document.getElementById("boxes").innerHTML += `<p style="position:absolute; top:${y}px; left:${x}px; width:${circle.size}px; height:${circle.size}px; border-radius:100px; background-color: ${circle.color}; border: solid 2px black;"></p>`;
}, false);

for(let i=0; i<boxes.length; i++)
{
    boxes[i].addEventListener("click", function(e){
        e.stopPropagation;
        if(this.getAttribute("id") == "reset"){document.getElementById("boxes").innerHTML = "";circle.color = "green";return; }
        circle.color = this.innerHTML;
    }, false)
}