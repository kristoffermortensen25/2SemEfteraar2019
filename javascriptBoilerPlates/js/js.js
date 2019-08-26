/**
 * file: js.js
 * purpose: interactivity
 **/


//en kommentar
/* hvad er en variabel? */
let hilsen = 'Hej verden - Nu fra en variabel!'; //variabel
var hej = "Hej ven"; //variabel
const copyright = 'All rights reserved'; //konstant

console.log(copyright);

function bmi(hoejde,vaegt){
 dinBMI = Math.floor(vaegt / (hoejde * hoejde));
  console.log('Her er din BMI: ' + dinBMI);
  //document.write('Her er din BMI: ' + dinBMI);
  document.getElementById('content').innerHTML = '<h2>Her er din BMI: '
  + dinBMI
  + '</h2>';
}

//her er en BMI
bmi(1.83,83);

function visBillede(billede){
  //document.getElementById("billede").innerHTML += "<img src='../javascriptBoilerPlates/images/"+billede+"' alt='billede'>"

  document.getElementById('billede').innerHTML += '<img src="images/'
+ billede
+ '" alt="billede">'
}

visBillede('bird.png');

var billeder = [
  "bird.png",
  "gull.png",
  "chuck.png"
];

// arrays virker sådan:
console.log(billeder)
console.log(billeder [2]); //tæller fra 0-2, i stedet for 1-3

// et for loop

for (var i = 0; i < billeder.length; i++){
  //console.log( billeder[i] );
  visBillede( billeder[i] );
}

var billederne = [
  "open.jpg",
  "closed.jpg"
]
console.log("Hilsen fra js til js.js");
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow < 20) {
    greeting = 'Welcome to Elgiganten! <br> Our shops are: open';
} else if (hourNow > 21) {
    greeting = 'Welcome to Elgiganten! <br> Our shops are: Closed!';
}

document.write('<h3>' + greeting + '</h3>');

//sende indhold til din HTML
//document.write('Hej verden!');

/**

// tal
let aaa = 234;

//javascript kan lave beregninger
let bbb = aaa * 777;

//hvad sker her
let ccc = aaa + hej;
console.log(ccc);

//summen af aaa + bbb = SUM
let ddd = aaa + bbb;
console.log('Summen af aaa + bbb er: ' + ddd);

// funktion dvs flere rækker af instrukser
let laegsammen = function(tal1, tal2){
  return tal1 + tal2;
}

**/
