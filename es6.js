// < ES6
let name = "Bob";
let location = "Timisoara";
let message = "Salut, sunt " + name + " din " + location + " .";

console.log(message);

// > ES6
let newMessage = `Salut, sunt ${name} din ${location} .`;

// < ES6
let address = {
  city: "Craiova",
  street: "Starda Mare",
  number: 10,
};

// let city = address.city;
// let street = address.street;
// let number = address.number;

// if(city === "Craiova") {
//   console.log("Sunt din Craiova");
// }

// > ES6
const { city, street, number } = address;
console.log(city, street, number);

// > ES9
// const { myTown: city, myStreet: street, number } = address;

// < ES6
const animals = ["caine", "pisica"];
// const dog = animals[0];
// const cat = animals[1];

// > ES6
const [dog, cat] = animals;
console.log(dog, cat);

// < ES6
const object1 = {
  masa: "ikea",
  dulap: "ikea",
};

const object2 = {
  cada: "dedeman",
  oblinda: "bricostore",
};

const mobilier = Object.assign({}, object1, object2);

console.log(mobilier);

// > ES6
const mobilier2 = { ...object1, ...object2 };

console.log(mobilier2);

// console.log(object1, object2);

// < ES6
const anim1 = ["caine", "pisica"];
const anim2 = ["vaca", "porc"];

// const anim3 = anim1.concat(anim2);
// console.log(anim3);

// > ES6
const anim3 = [...anim1, ...anim2];
console.log(anim3);

// const myObj = { name: 'Bob' };
// const secondObject = { myObj };

// const address = {
//   street: 'principala',
//   number: 1,
// };

// const student = {
//   name: 'Bob',
//   address,
// };

if (true) {
  if (false) {
    while (1) {}
  }
}

<HTML>
  <secttion>
    <div>
      <div>

      </div>
    </div>
  </secttion>
</HTML>;
