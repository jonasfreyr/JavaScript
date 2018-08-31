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
