function print(value, index, items) {
    if (Array.isArray(value) === true) {
        console.log(index, value, 'is an Array');
        value.forEach(print);
    } else {
        console.log(index, value, 'is not an Array');
    }
}

const table = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// table.forEach(print);

const newArray = table.filter(function (value) {
  return value > 3;
});

console.log(table);
console.log(newArray);