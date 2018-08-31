1. <b>Hvað er null og undefined?</b> 
  * Tóm gildi sem maður notar ef þú þarft eitthvað til að vera í breytu.
2. <b>Hvað gerir 'use strict' í JavaScript kóða?</b> 
  * Lætur þýðandann breyta sem minnst.
3. <b>Hver er munurinn á let og var?</b>
  * let fer inn í þrengra scope en var.

4. <b>Skilgreindu fall á þrjá mismunandi vegu með kóðasýnidæmi.</b>
 ```javascript
  function fall(){
  }
  ```
  
 ```javascript
  let fall = function(){
  }
  ```
  
 ```javascript
  let fall = function fall(){
  }
  ```
5. <b>Útskýrðu hvað eftirfarandi kóði gerir, hvað gera svigarnir?</b>
 ```javascript
 (function() { alert('Hello World'); })();
 ```
 * fyrstu svigarnir halda utan um allt fallið og svigarnir til hægti kalla á það.

6.<b> Í hvaða röð er kóðinn keyrður í raun eftir að JS þýðandinn (e. interpreter) er búinn að fá
hann til sín? Raðaðu kóðanum rétt fyrir JS þýðandanum. Afhverju er útkoman 8? Útskýrðu.</b>
```javascript
function foo(){
      function bar() {
           return 3;
       }
       return bar();
      function bar() {
            return 8;
       }
}
alert(foo()); 

```
 * Hann kíkir á kóðan til að athuga hvort hann er í lagi og færi all eins ofanlega og hann getur í scopinu sem það er í. t.d hann færir neðra function bar ofan við return bar(). Hann yfirskrifar líka gamla bar fallið með því nýja og þess vegna fær maður 8 þegar maður kallar á það.
7. <b> Hver er munurinn á for, for-in og for-of lykkjum? </b>
 * 
 
8. <b>forEach() Leystu lið 20 í Arrays á Udacity https://classroom.udacity.com/courses/ud803 </b>

```javascript
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(num, index) {
    if (num % 3 === 0){
        num += 100
        test.splice(index, 1, num)
    }
    
}

)

console.log(test)
```
9. <b>Hvað gerir .map() fylkjaaðferðin? Leystu lið 22 í Arrays á Udacity
https://classroom.udacity.com/courses/ud803</b>
```javascript
var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function(bill){
    tipped = bill * 1.15
    tipped = tipped.toFixed(2)
    return Number(tipped)
    
}

)
console.log(totals)
```
