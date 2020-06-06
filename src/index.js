function print(value, index, items) {
    if (Array.isArray(value) === true) {
        console.log(index, value, 'is an Array');
        value.forEach(print);
    } else {
        console.log(index, value, 'is not an Array');
    }
}

const table = [false, true, 665, "false", ["a", "b", 1, [1, 2, 3, 4]], 555];
table.forEach(print);
