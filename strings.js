let myCNP = "1234567890";

console.log(myCNP[4]);
console.log(myCNP.length);
console.log(myCNP[myCNP.length - 1]);

console.log("substring: " + myCNP.substring(3, 6));

// let includesFive = myCNP.includes("170");
// console.log(includesFive);


// let brandList = "Dacia BMW Mercedes, Porsche Audi";
// console.log(brandList.includes("Porsche,"));


let sentence = "Lasa-ma papa la mare";
sentence = sentence.replace("mare", "munte");
console.log(sentence);

let brandList = "Dacia,BMW,Mercedes,Porsche,Audi";
let brands = brandList.split(",");
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
