const nestedArray = [ false, true, 665, "false", [ "a", "b", 1, [ 1, 2, 3, 4 ] ], 555 ];

function printNestedArrayValuesRecursively(value, index, items) {
  if (Array.isArray(value) === true) {
    console.log(index, value, 'is an Array');
    value.forEach(printNestedArrayValuesRecursively);
  } else {
    console.log(index, value, 'is not an Array');
  }
}

printNestedArrayValuesRecursively(nestedArray);

const studentGrades = [ 1, 2, 3, 4, 5, 2, 2, 3, 2 ];

let filteringFunction;

const passAll = function (value) {
  return true;
};

const passOnlyTheBest = function (grade) {
  return grade > 4;
};

// Try changing the teacher's mood to true and observe
// what console.log() outputs!
const teachersMoodIsGood = false;

if (teachersMoodIsGood) {
  filteringFunction = passAll;
} else {
  filteringFunction = passOnlyTheBest;
}

const passedStudentsGrades = studentGrades.filter(filteringFunction);

const studentGradesSquared = studentGrades.map(function (grade) { return grade * grade; });

console.log(passedStudentsGrades);
console.log(studentGradesSquared);