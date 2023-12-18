// const first = [4, 5, 6];
// const second = [7, 8, 9];
// const combined = first.concat(second);
// const slice = combined.slice(2, 4);
// console.log(combined);
// console.log(slice);

// const numbers = arrayFromRange(-3, -4);
// console.log(numbers);
// function arrayFromRange(min, max) {
//     const output = [];
//     for (let i = min; i<= max; i++)
//     output.push(i);
// return output;
// }

// const numbers = [1, 2, 3, 4];
// console.log(includes(numbers, 6));
// function includes(array, searchElement) {
//    for (let element of array) 
//    if (element === searchElement)
//    return true;
// return false;
// }

// const numbers = [1, 2, 3, 4, 6];
// console.log(except(numbers, 4));
// function except(array, excluded) {
//     const output = [];
//     for (let element of array) 
//    if (element !== excluded)
//    output.push(element);
//    return output;
// }

// const numbers = [1, 2, 3, 4];
// const output = move(numbers, 1, -2);
// console.log(output);
// function move(array, index, offset) {
//     const position = index + offset;
//     if (position >= array.length || position < 0) {
//         console.error('Invalid offset.');
//         return;
//     }
//     const output = [...array];
//     const element = output.splice(index, 1)[0];
//     output.splice(position, 0, element);
//     return output;
// }

// const numbers = [1, 2, 3, 4, 1];
// const count = countOccurrences(numbers, 1);
// console.log(count);
// function countOccurrences(array, searchElement) {
//     let count = 0;
//     for (let element of array)
//     if (element === searchElement)
//     count++;
//     return count;
// }

