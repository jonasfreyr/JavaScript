1. Útskýrðu Prototype kerfið í JavaScript. Hver er munurinn á því t.d. og ObjectOriented
forritun (OOP) í öðrum málum eins og Python? (1%)
OOP í t.d Python þá eru klasarnir bara blueprint til að búa til object en í JavaScript þá er það bara til er bara meira physical.
  

2. Útskýrðu eins vel og þú getur hvað gerist í kóðanum(1%)
a. Þegar prototype er sleppt
   Þá þurfa allir hlutir að afrita það, sem eyðir tilgangslausu minni.
b. Hvað gerir prototype í Book.prototype.getIsbn
   Gerir það að allir hlutir fá vísun að fallinu en ekki afrit af því.
 ```javascript
function Book(isbn) {
 this.isbn = isbn;
}
// Book.prototype.getIsbn
Book.getIsbn = function () {
 return "Isbn is " + this.isbn;
};
 ```

3. Classical Model (function constructor and prototype) (2%)
a) Búðu til þrjár geimflauga objecta með function smið sem hafa
mismunandi heiti. Geimflaugarnar eiga einnig að hafa eigindin speed og
life með upphafsgildinu 10.
Spaceship-name generator:
http://www.fantasynamegenerators.com/spaceshipnames.php#.WnQsPqhl-M8

b) Gefðu geimflaugunum mismunandi speed gildi.

c) Notaðu Prototype til að bæta við nýrri method fly sem hækkar gildið
speed um 1. Þetta fá allar flaugarnar.

d) Búðu til undirhóp flauga (2 flaugar) af einni geimflauginni sem þú bjóst til
að ofan. Gefðu þessum flaugum einhver eigindi og gildi. Þessar flaugar
eiga að auki að hafa aðferðina setLife() sem hækkar life um 1.
 ```javascript
function Flaugar(speed, nafn){
   		this.speed = speed;
   		this.life = 10;
   		this.nafn = nafn;
   	}

Flaugar.prototype.fly = function(){
   		this.speed += 1;
   	}

let flaug_1 = new Flaugar(5, "LWSS Dream");
let flaug_2 = new Flaugar(2, "SC Atlas");
let flaug_3 = new Flaugar(7, "The Siren");

function undirFlaugar(gerd, nafn){
	this.gerd = gerd;
	this.nafn = nafn;
	this.life = 5

}

undirFlaugar.prototype = Object.create(Flaugar.prototype);
undirFlaugar.prototype.constructor = undirFlaugar;

undirFlaugar.prototype.setLife = function(){
	this.life += 1
}

let flaug_4 = new undirFlaugar('mk3', 'Santas Little Helper');
let flaug_5 = new undirFlaugar('mk1', 'Hornet');
  ```  
4. Gerðu það sama og í lið 3 en með notkun class (ES2015). Notaðu constructor,
get, set, static, extends, super, mix-ins eftir þörfum. (2%)
