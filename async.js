let counter = 1;


/* Normal */
// function sleep(milliseconds)
// {
//     const date = Date.now();
//     let currentDate = null;
//     while(currentDate - date < milliseconds){
//         currentDate = Date.now();
//     }
// }
// (function EmitRandomNumber()
// {
//     sleep(2000)
//     let rand = Math.floor(Math.random() * 100) + 1;
//     console.log(`Attempt #${counter}. EmitRandomNumber is called.`);
//     console.log("2 seconds have lapsed");
//     console.log(`Random number generated is ${rand}!!!`);
//     counter++;
//     if(rand < 80 && counter <=10)
//     {
//         EmitRandomNumber();
//     }
// })()


/* Promise */
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// function countSeconds()
// {
//     sleep(2000).then(EmitRandomNumber);
// }
// function EmitRandomNumber()
// {
//     let rand = Math.floor(Math.random() * 100) + 1;
//     console.log(`Attempt #${counter}. EmitRandomNumber is called.`);
//     console.log("2 seconds have lapsed");
//     console.log(`Random number generated is ${rand}!!!`);
//     counter++;
//     if(rand < 80 && counter <=10)
//     {
//         countSeconds();
//     }
// }
// countSeconds();

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
function EmitRandomNumber()
{
    let rand = Math.floor(Math.random() * 100) + 1;
    console.log(`Attempt #${counter}. EmitRandomNumber is called.`);
    console.log("2 seconds have lapsed");
    console.log(`Random number generated is ${rand}!!!`);
    counter++;
    if(rand < 80 && counter <=10)
    {
        generateRandomNumber();
    }
}
async function generateRandomNumber()
{
    await sleep(2000);
    EmitRandomNumber();
}

generateRandomNumber();