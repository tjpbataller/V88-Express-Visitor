function $query(e)
{
    this.element = document.querySelectorAll(e);
    this.click = function(func){
        for(let index=0; index<this.element.length; index++){
            this.element[index].addEventListener("click",function(e){
                func(e.type);
                return e;
            },false)
        }
    
        return this;
    }
    this.hide = function(e){
        for(let index=0; index<this.element.length; index++){
            this.element[index].style.visibility = "hidden";
        }
    }
    this.show = function(e){
        for(let index=0; index<this.element.length; index++){
            this.element[index].style.visibility = "visible";
        }
    }

    return this;
}