let phone = "iPhone";
// REDECLAREA (let phone) va genera eroare.
// let phone = "Android";

for(var i=0; i<1; i++) {
  // LET are BLOCK scope (vezi desenul cu scoping).
  let phone = "My phone from if";

  console.log('phone din if: ', phone);
}
console.log('phone din afara if-ului: ', phone);

// REASIGNAREA VA DA EROARE, valoarea variabilei nu mai poate fi modificata
const constante = 'Nu ma schimba nimeni';

constante = 1;