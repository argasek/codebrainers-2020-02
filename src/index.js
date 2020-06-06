const arr = [false, true, 665, "false", ["a", "b", 1, [1, 2, 3, 4]], 555, 444];

function print(basia, index, items) {
  if (index >= 2) {
    console.log(index, basia);
  }
}

arr.forEach(print);
