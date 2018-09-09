1. Búðu til object með upplýsingar um þig; nafn, heimasími og gsm. Prentaðu út með
console.log() síðara símanúmerið (0.5%)
```javascript
let eg = {
nafn:"Jónas", 
heimaSimi: 6846841, 
gsm: 5464686

}
```
2. Prentaðu út með console.log() Nonni. (0.5%)
```javascript
let family = {
"parents":
{
"fathers": [{"name":"Jakob"},{"name":"Nonni"}],
"mothers":[{"name":"Rakel"},{"name":"Sara"}]
}
 };
 
 family.parents.fathers[1].name
```
3. Leystu lið 8 í Objects á Udacity https://classroom.udacity.com/courses/ud803 (1%)
```javascript
let breakfast = {
    name: "The Lumberjack",
    price: 9.95,
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
    
}
```
4. Leystu lið 9 í Objects á Udacity https://classroom.udacity.com/courses/ud803(1%)
```javascript
/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function printingMoney(){
        return "Welcome!\nYour balance is currently $" + this.balance +" and your interest rate is "+ this.interestRatePercent + "%."
        
    }
    
    // your code goes here
};

console.log(savingsAccount.printAccountSummary());
```
5. Leystu lið 12 í Objects á Udacity https://classroom.udacity.com/courses/ud803(1%)
```javascript
var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(obj){
    console.log(obj.type +" donuts cost $"+ obj.cost +" each")
    
})
// your code goes here
```
6. Búðu til og notaðu smið (e. function constructor) til að búa til tvær mismunandi pizzur
(objects). Pizzan þarf að hafa; verð, stærð (large, medium, size) og álegg (ostur, skinka,
pepperoni, ananas). Dæmi: Stór Magherita (ostur, oregano) kr. 2195. (1%)
```javascript
let Pizza = function(verd, staerd, alegg){
				this.verd = verd; 
				this.staerd = staerd;
				this.alegg = alegg
			}
			

			let pizza1 = new Pizza(2150, "Stór", ["ostur","skinka", "pepperoni", "rjómaostur"])

			let pizza2 = new Pizza(1500, "Miðstærð", ["ostur"])
```



