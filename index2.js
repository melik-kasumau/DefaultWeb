// let hour = 20;
// if (hour >= 6 && hour < 12)
//     console.log('Good morning');
// else if (hour >= 12 && hour < 18)
//     console.log('Good afternoon');
// else console.log ('Good evening');

// let role = 'Guest';
// switch (role) {
//     case 'Moderator':
//         console.log('Moderator User');
//         break;
//     case 'Guest':
//         console.log('Guest User');
//         break;
//     default:
//         console.log('Unknown User');
// }

// for (let i = 5; i >= 0; i--) {
//     if (i % 2 !== 0) console.log('Hello World', i);
// }

// let i = 1;
// while (i<=5) {
//     if (i % 2 !== 0) console.log('Hello World', i);
//     i++ 
// }

// let i = 9;
// do {
//     if (i % 2 !== 0) console.log('Hello World', i);
//     i++
// } while (i <=5);

// const person = {
//     name: 'Vadzim',
//     age: 33
// };
// for (let key in person)
// console.log(key, person[key]);

// const person = ['Vadzim', 'Melik', 'Kasumau'];
// for (let key of person)
// console.log(key);

// function calculateAverage(array) {
//     let sum = 0;
//     for (let value of array)
//     sum += value;
// return sum / array.length;
// }

// showStars(5);
// function showStars(rows) {
//     for (let row = 1; row <= rows; row++) {
//     let pattern = '';
//     for (let i = 0; i < row; i++) 
//     pattern += '*';
//     console.log(pattern);
//     }
// }

showPrimes(20);
function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)     
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
        for (let factor = 2; factor < number; factor++)
        if (number % factor === 0) {
        return false;
    }
return true;
}
