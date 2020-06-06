const studentGrades = [2, 8, 4, 2, 2, 4, 2];

/**
 * Checks if all items in arr are even.
 * @param arr
 */
function areAllEven(arr) {
    let result = 0;

    arr.forEach(function (value, index, items) {
        if (value % 2 === 0) {
            result++;
        }
    });
    return result === arr.length;

}

console.log(areAllEven(studentGrades))