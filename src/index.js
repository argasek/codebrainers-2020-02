const arr = [false, true, 665, "false", ["a", "b", 1, [1, 2, 3, 4]], 555];

function print(value, index, items) {
    if (typeof value === "number") {
        console.log(index, value);
    }
}

arr.forEach(print);