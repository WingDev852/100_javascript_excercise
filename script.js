/*## 1. Variabelen & Datatypes (1-10) 
1. Maak een variabele `naam` met je eigen naam en print deze met 
`console.log`. 
var name = 'Rocky';
console.log(name)

2. Maak twee variabelen `leeftijd` en `geboortejaar` en bereken het 
huidige jaar op basis daarvan. 

var leeftijd = 20;
var geboortejaar = 2020;
var huidige_jaar = geboortejaar - leeftijd;
console.log(huidige_jaar)

3. Gebruik `typeof` om het type te printen van: een getal, een string, 
een boolean, en `undefined`. 

console.log(typeof(hello))
console.log(typeof("hello"))
console.log(typeof(true))
console.log(typeof(17))

4. Maak een variabele met `const` en probeer deze te overschrijven. Wat 
gebeurt er? 

const name = rocky;
name = hello;
console.log(name)
Je kunt de const niet veranderen omdat het een constant is.

5. Zet een string-getal (`"42"`) om naar een echt getal met `Number()`.

console.log(typeof(Number("42")))

6. Zet een getal om naar een string met `String()` of `.toString()`. 

console.log(typeof(String(42)))

7. Maak een template literal die je naam en leeftijd combineert in één 
zin. 

var name = 'rocky';
var leeftijd = 27;

console.log("hello my name is " + name + " and im " + leeftijd + " years old ")*/

/*## 2. Operatoren & Rekenen (11-20) 
11. Schrijf een script dat de rest berekent van 17 gedeeld door 5 (`%`). 

var rest = 17 % 5;
console.log(rest)

12. Bereken of een getal even of oneven is met de modulo-operator. 

let even = 18 % 2 === 0;
console.log(even)

let oneven = 19 % 2 === 0;
console.log(oneven)

13. Gebruik `++` en `--` om een teller op te hogen en te verlagen.

let plus = 8;
plus++;
console.log(plus)

let min = 8;
min--;
console.log(min)

14. Vergelijk `==` en `===` met de waarden `"5"` en `5`. Print beide 
resultaten. 

let check = 5 == "5";
console.log(check)

let check1 = 5 === "5";
console.log(check1)

15. Schrijf een uitdrukking die controleert of een getal tussen 10 en 20 
ligt. 


16. Bereken de oppervlakte en omtrek van een cirkel met een gegeven 
straal. 

let straal = 5;

let oppervlake = 3.14 * straal**2
console.log(oppervlake)

let omtrek = 2 * 3.14 * straal;
console.log(omtrek)

17. Zet graden Celsius om naar Fahrenheit met een formule. 

let celcius = 12;
let fahrenheit = (celcius * 1.8) + 32;
console.log(fahrenheit)

18. Gebruik de `**` operator om een getal tot de macht 3 te verheffen. 

let macht = 3**3;
console.log(macht)

19. Schrijf een uitdrukking met `&&` en `||` die twee condities 
combineert. 

let leeftijd = 25;
let heeftRijbewijs = true;

// && (EN): allebei moeten waar zijn
let magRijden = leeftijd >= 18 && heeftRijbewijs === true;
console.log(magRijden); // true — want 25 >= 18 (waar) EN heeftRijbewijs (waar)

// || (OF): één van de twee is genoeg
let weekend = false;
let vakantie = true;
let vrijVandaag = weekend || vakantie;
console.log(vrijVandaag); // true — want vakantie is waar, dat is al genoeg

20. Gebruik `!` om een boolean om te draaien.

let boolean = 5 != 5;
console.log(boolean)

*/

