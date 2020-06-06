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
function dividedByThree(value) {
    if (value % 3 === 0) {
        return true;
    } else {
        return false;
    }

}

const newArray = table.filter(dividedByThree);
console.log(table);
console.log(newArray);