// function greet(name) {
//     console.log('Hello ' + name)
// }
// greet('John');

// let x = 10;
// let y = 2;
// console.log(x ** y);

// let points = 110;
// let type = points > 100 ? 'gold' : 'silver';
// console.log(type);

// let a = 'red';
// let b = 'blue';

// let c = a;
// a = b;
// b = c;


// console.log(a);
// console.log(b);

// let number = max(4, 2);
// console.log(number);
// function max(x, y) {
// return (x > y) ? x : y;
// }

// let max = isLandscape(76, 69);
// console.log(max);
// function isLandscape(width, heigth) {
//     return (width > heigth);
// }

// const output = fizzBuzz(false);
// console.log(output);
// function fizzBuzz(input) {
//     if (typeof input !== 'number')
//     return NaN;
//     else if ((input % 5 === 0) && (input % 3 === 0))
//     return 'fizzBuzz';
//     else if (input % 5 === 0)
//     return 'Buzz';
//     else if (input % 3 === 0)
//     return 'fizz';
//     else
//     return input;
//     }

// checkSpeed(78);
// function checkSpeed(speed) {
// const speedLimit = 70;
// const kmPerPoint = 5;
// if (speed < speedLimit + kmPerPoint) {
//      console.log('ok');
//      return;
// }
//     const points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (points >= 12) console.log('License suspended');
//     else console.log('Points', points);
//     }

// let x = { value: 20};
// let y = x;
// x.value = 20;

//factory function
// let address = createAddress('a', 'b', 'c');
// console.log(address);

// function createAddress(street, city, zipCode) {
//      return {
//           street,
//           city,
//           zipCode
//      };
// }
//Constractor function
// let address = new Address ('a', 'b', 'c');
// console.log(address);
// function Address(street, city, zipCode) {
//      this.street = street;
//      this.city = city;
//      this.zipCode = zipCode;
// }

// function showAddress(address) {
//      for (let key in address)
//      console.log(key, address[key]);
// }
// showAddress(address);

// let address1 = new Address('a', 'b', 'c');
// let address2 = new Address('a', 'b', 'c');

// console.log(areEqual(address1,address2));
// console.log(areSame(address1,address2));

// function Address(street, city, zipCode) {
//      this.street = street;
//      this.city = city;
//      this.zipCode = zipCode;
// }

// function areEqual(address1, address2) {
// return address1.street === address2.street &&
// address1.city === address2.city && 
// address1.zipCode === address2.zipCode;
// }

// function areSame(address1, address2) {
//      return address1 === address2; 
//      }

// let post = new Post('a', 'b', 'c');

// console.log(post);

// function Post(title, body, author) {
//      this.title = title;
//      this.body = body;
//      this.author = author;
//      this.views = 0;
//      this.comments = [];
//      this.isLive = false;
// }

let priceRanges = [
     {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
     {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
     {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50},
];
let restaurants = [
     {averagePerPerson: 5}
]