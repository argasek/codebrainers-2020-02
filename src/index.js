const studentGrades = [ 1, 2, 3, 4, 5, 2, 2, 3, 2 ];

/**
 * Checks if all items in arr are even.
 * @param arr
 */
function areAllEven(arr) {
 let result = 0;

 arr.forEach(function (value,index, items) {
    if (value % 2 === 0){
        result++;
    }

 });

}