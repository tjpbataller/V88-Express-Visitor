let foreach = function(arr, func){
    for(let i = 0; i<arr.length; i++)
    {
        arr[i] = func(arr[i]);
    }
    return arr;
}

//1
let result = foreach([1,2,3,4,5], function(num) { return num*2; });
console.log(result); //this should log [2,4,6,8,10]

//2
result = foreach([1,2,3,"v88", "training"], function(val) { 
    return ( (typeof(val) === 'number') ? 0 : val);
});
console.log(result); //this should log [0,0,0,"v88","training"];

//3
result = foreach([1,2,3,"hello"], function(val) { return typeof(val); });
console.log(result); //this should log ["number", "number", "number", "string"];

let filter = function(arr, func){
    let newArr = [];
    for(let i = 0; i<arr.length; i++)
    {
        if(func(arr[i]) !== false){
            newArr.push(arr[i]);
        }
        
    }
    return newArr;
}

let result2 = filter([1,2,3,4,15], function(val) { return val<3; }); //only allows values that is less than 3
console.log(result2); //this should log [1,2]

let result3 = filter([1,2,3,4,15], function(val) { return val<3; }); //only allows values that is less than 3
console.log(result3); //this should log [1,2]


let reject = function(arr, func){
    let newArr = [];
    for(let i = 0; i<arr.length; i++)
    {
        if(func(arr[i]) == false)
        {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
/*1*/
let result4 = reject([1,2,3,4,15], function(val) { return val<10; }); //rejects any value that is less than 10
console.log(result4); //this should log [15]

/*2*/
let result5 = reject([1,2,3,4,15], function(val) { return val<3; }); //rejects any value that is less than 3
console.log(result5); //this should log [3,4,15]

