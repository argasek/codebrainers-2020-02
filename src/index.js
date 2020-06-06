const studentGrades = [1, 2, 1, 3, 3, 3, 1];

function areSomeEven(arr) {
        let result = 0;

    arr.forEach(function (value, index, items) {

        if (value % 2 === 0) {
            result++;
        }

    });
    if (result > 0) {
        return true;
    } else {
        return false;
    }

}

console.log(areSomeEven(studentGrades))

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

// console.log(areAllEven(studentGrades))