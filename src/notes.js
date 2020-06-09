// let a = 'Kasia';
// function test(x) {
//     x = 'Basia';
// }
// console.log(a);
// test(a);
// console.log(a);
//
//
// let b = [3];
// function test2(x) {
//     x[0] = 5;
// }
// console.log(b);
// test2(b);
// console.log(b);


// "Copying" through reference
let a = [{ kasia : '3' }, 15, 7, 2, "basia", false];
let b = a;

// Real copying, but IT'S A TRAP!
// for (let i = 0; i < a.length; i++) {
//   const element = a[i];
//   element[1] = '**********';
//   b.push(element);
// }


// console.log('a', a);
// console.log('b', b);

b[2] = "testowy string";
// Here is the trap.
b[0].kasia = 'test';

console.log('b', b);
console.log('a', a);

console.log(typeof 3);
console.log(typeof 'ala ma kota');
console.log(typeof { test: 'test'});
console.log(typeof [0, 1, 2]);
console.log(typeof b);const arr = [false, true, 665, "false", ["a", "b", 1, [1, 2, 3, 4]], 555];

// function print(value, index, items) {
//     if (Array.isArray(value) === true) {
//         console.log(index, value, 'is an Array');
//
//     } else {
//         console.log(index, value, 'is not an Array');
//     }
// }
//
//
// arr.forEach(print);

// Passing anonymous function to filter
const table = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArray = table.filter(function (value) {
  return value > 3;
});