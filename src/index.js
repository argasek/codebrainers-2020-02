const arr = [false, true, 665, "false", ["a", "b", 1, [1, 2, 3, 4]], 555];

function print(value, index, items) {
    if (Array.isArray(value) === true) {
        console.log(index, value, 'is an Array');

    } else {
        console.log(index, value, 'is not an Array');
    }
}


arr.forEach(print);
