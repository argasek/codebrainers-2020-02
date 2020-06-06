const arr = [false, true, 665, "false", ["a", "b", 1, [1, 2, 3, 4]], 555];

function print(basia, index, items) {
    if (items.length % 2 === 0) {
        console.log(index, basia);
    }
}

arr.forEach(print);