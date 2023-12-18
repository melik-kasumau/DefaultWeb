// console.log(sum([1, 2, 3, 4]));

// function sum(...items) {
//     if (items.length === 1 && Array.isArray(items[0]))
//     items = [...items[0]];
// return items.reduce((a,b) => a + b);
// }

// const circle = {
//     radius: 1,
//     get area() {
//         return Math.PI * this.radius * this.radius;
//     }
// };

// console.log(circle.area);

try {
const numbers = [1, 2, 3, 4];
const count = countOccurance(numbers, 1);
console.log(count);
}
catch (e) {
   console.log(e.message); 
}

function countOccurance(array, searchElement) {
    if (!Array.isArray(array))
    throw new Error('Invalid array.');
    return array.reduce((accumulator, current) => {
        const occurance = (current === searchElement) ? 1 : 0;
        return accumulator + occurance;
    }, 0);
}