function print(value, index, items) {
    if (Array.isArray(value) === true) {
        console.log(index, value, 'is an Array');
        value.forEach(print);
    } else {
        console.log(index, value, 'is not an Array');
    }
}

const table = [8, 18, 27, 36, 738, 555];
// table.forEach(print);
function square(value) {
    return value * value;
}

const newArray = table.map(square);
console.log(table);
console.log(newArray);