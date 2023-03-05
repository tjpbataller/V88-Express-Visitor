// /* ES6 */
// class Bike
// {
//     constructor(price, max_speed, miles=0)
//     {
//         this.price = price;
//         this.max_speed = max_speed;
//         this.miles = miles>0?miles:0;
//     }
//     displayInfo()
//     {
//         console.log("Price: ", this.price);
//         console.log("Max Speed: ", this.max_speed);
//         console.log("Miles: ", this.miles);

//         return this;
//     }
//     drive()
//     {
//         this.miles += 10;
//         console.log("Driving...");

//         return this;
//     }
//     reverse()
//     {
//         this.miles>0?this.miles-=5:"";
//         console.log("Reversing...");

//         return this;
//     }
// }

// let firstBike = new Bike(50, 60);
// firstBike.drive().drive().drive().reverse().displayInfo();

/* ES5 without prototype */
// function Bike(price, max_speed, miles=0)
// {
//     this.price = price;
//     this.max_speed = max_speed;
//     this.miles = miles>0?miles:0;
//     this.displayInfo = function()
//     {
//         console.log("Price: ", this.price);
//         console.log("Max Speed: ", this.max_speed);
//         console.log("Miles: ", this.miles);

//         return this;
//     }
//     this.drive = function()
//     {
//         this.miles += 10;
//         console.log("Driving...");

//         return this;
//     }
//     this.reverse = function()
//     {
//         this.miles>0?this.miles-=5:"";
//         console.log("Reversing...");

//         return this;
//     }
// }

// var SecondBike = new Bike(300, 20, -120);
// SecondBike.displayInfo().drive().drive().reverse().displayInfo();

/* ES5 with prototype*/
function Bike(price, max_speed, miles=0)
{
    this.price = price;
    this.max_speed = max_speed;
    this.miles = miles>0?miles:0;
}
Bike.prototype.displayInfo = function()
{
    console.log("Price: ", this.price);
    console.log("Max Speed: ", this.max_speed);
    console.log("Miles: ", this.miles);
    
    return this;
}
Bike.prototype.drive = function()
{
    this.miles += 10;
    console.log("Driving...");

    return this;
}
Bike.prototype.reverse = function()
{
    this.miles>0?this.miles -= 10:"";
    console.log("Reversing...");

    return this;
}

var ThirdBike = new Bike(750,300,20);
ThirdBike.proto
ThirdBike.reverse().reverse().reverse().displayInfo();