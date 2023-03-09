module.exports = function()
{
    return {
        greet: function()
        {
            console.log("alright");
        },
        add: function(num1, num2)
        {
            console.log(`The sum is ${num1 + num2}`);
        }
    }
}