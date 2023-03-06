/* ES4/ES3 */
function Desk(name) {
    var obj = {};
    obj.name = name;
    obj.x = 0;
    obj.y = 0;
    obj.color = "black";
    obj.mov = function(x, y) {
       this.x = x;
       this.y = y;
    }
    obj.updateColor = function(new_color) {
       this.color = new_color;
    }
    return obj;
 }
 var desk1 = Desk("oak desk");
 var desk2 = Desk("maple desk");
 desk1.updateColor("brown");
 
/* ES5 no prototype */
function Desk(name)
{
    this.name = name;
    this.x = 0;
    this.y = 0;
    this.color = "black";
    this.mov = function(x, y)
    {
        this.x = x;
        this.y = y;
    }
    this.updateColor = function(new_color)
    {
        this.color = new_color;
        return this;
    }
}
var desk1 = new Desk("oak desk");
var desk2 = new Desk("maple desk");
desk1.updateColor("brown");

/* ES5 with prototype */
function Desk(name)
{
    this.name = name;
    this.x = 0;
    this.y = 0;
    this.color = "black";
}
Desk.prototype.mov = function(x, y)
{
    this.x = x;
    this.y = y;
}
Desk.prototype.updateColor = function(new_color)
{
    this.color = new_color;
}

var desk1 = new Desk("oak desk");
var desk2 = new Desk("maple desk");
desk1.updateColor("brown");

/* ES6 */

class Desk
{
    construtor(name)
    {
        this.name = name;
        this.x = 0;
        this.y = 0;
        this.color = "black";
    }
    mov(x, y)
    {
        this.x = x;
        this.y = y;
    }
    updateColor(new_color)
    {
        this.color = new_color;
    }
}

var desk1 = new Desk("oak desk");
var desk2 = new Desk("maple desk");
desk1.updateColor("brown");