function FirstObject(size){
    this.size = size;
}

FirstObject.prototype.increaseSize = function(new_size){
    this.size = new_size;
}

let SecondObject = new FirstObject(20);

console.log(SecondObject.size);
SecondObject.increaseSize(30);

console.log(SecondObject.size);