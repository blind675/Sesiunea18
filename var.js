// Problema: Redeclararea unei variabile intr-un bloc de cod (intre acoladele lui if, acelasi lucru se intampla si pentru while sau for).
var phone = "iPhone";
var phone = "Android";

var myAge = 12;


// Diferenta: Intre acoladele unei functii, avem comportament diferit.
function myFunction() {
  // Variabilele declarate in interiorul unei functii sunt vizibile doar in interiorul functiei.
  var phone = "Not a phone";
  console.log(phone);

  console.log("myAge:" , myAge);

  // var myName = "Bob";
}

if(true) {
  console.log(' phone din if :', phone);
  console.log(' myAge din if :', myAge);

  var myAddress = 'Home';
  console.log(' myAddress din if :', myAddress);
  // Putem redeclara o variabila cu var (nu vrem asta in mod normal).
  // Telefonul va fi modificat si in afara if-ului.
  var phone = "Third time is best";
}

console.log(phone);

myFunction();

// console.log(myAddress);
