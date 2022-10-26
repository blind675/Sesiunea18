let myCNP = "1234567890";

console.log(myCNP[4]);
console.log(myCNP.length);
console.log(myCNP[myCNP.length - 1]);
// Extragerea unui subsir:
console.log("substring: " + myCNP.substring(3, 6));

// let includesFive = myCNP.includes("170");
// console.log(includesFive);

// Cautarea unui subsir intr-un sir:
let brandList = "Dacia BMW Mercedes, Porsche Audi";
console.log(brandList.includes("Porsche,"));

// Inlocuirea unui subsir (dintr-un sir) cu un alt subsir:
let sentence = "Lasa-ma papa la mare";
// replace returneaza un nou sir, asa putem modifica partial sirul initial.
sentence = sentence.replace("mare", "munte");
console.log(sentence);

// Transformarea string-ului intr-un array, dupa un separator
let brandList2 = "Dacia,BMW,Mercedes,Porsche,Audi";
let brands = brandList2.split(",");
console.log(brands);



  let obj1 = {
    id: 1,
    name: "Bob",
    address: {
      city: 'Arad',
      street: {
        name: 'Principala',
        nr: 2
      }
    }
  }

  // ATENTIE : nu copiaza obiecte in obiecte
  let objCopy = Object.assign({}, obj1);

  // let objCopy = {
  //   id: obj1.id,
  //   name: obj1.name,
  //   address: {
  //     city: obj1.address.city,
  //     street: {
  //       name: 'Principala',
  //       nr: 2
  //     }
  //   }
  // }

  objCopy.address.street.nr = 99999;

  console.log(obj1);
  console.log(objCopy);
