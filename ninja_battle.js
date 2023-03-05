function randomAttack(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max)) + 1; // The maximum is inclusive and the minimum is inclusive
  }
var ninja1 = {
    hp: 100,
    strength: 15,
    attack: function() {
        ninjaAttack = randomAttack(this.strength);
        ninja2.hp = ninja2.hp - ninjaAttack;
        console.log(`Ninja1 attacks Ninja2 and does a damage of ${ninjaAttack}! Ninja1 health: ${this.hp}. Ninja2 health: ${ninja2.hp}`);
    }
  }
  var ninja2 = {
    hp: 150,
    strength: 10,
    attack: function() {
        ninjaAttack = randomAttack(this.strength);
        ninja1.hp = ninja1.hp - ninjaAttack;
        console.log(`Ninja2 attacks Ninja1 and does a damage of ${ninjaAttack}! Ninja1 health: ${ninja1.hp}. Ninja2 health: ${this.hp}`);
    }
  }

for(let index = 1; index <= 10; index++)
{
    console.log("===Round"+index+"===");
    ninja1.attack();
    ninja2.attack();
}

if(ninja1.hp > ninja2.hp)
{
    console.log("Ninja1 WINS!!!");
}
else
{
    console.log("Ninja2 WINS!!!");
}
