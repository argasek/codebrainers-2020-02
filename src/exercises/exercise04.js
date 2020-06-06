const nestedArray = [false, true, 665, "false", ["a", "b", 1, [1, 2, 3, 4]], 555];

function printNestedArrayValuesRecursively(value, index, items) {
  if (Array.isArray(value) === true) {
    console.log(index, value, 'is an Array');
    value.forEach(printNestedArrayValuesRecursively);
  } else {
    console.log(index, value, 'is not an Array');
  }
}

printNestedArrayValuesRecursively(nestedArray);

const studentGrades = [1, 2, 3, 4, 5, 2, 2, 3, 2];

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


const isEven = function (value) { return value % 2 === 0; };
const isOdd = function (grade) { return grade % 2 !== 0; };

const areAnyEvenGrades = studentGrades.some(isEven);
const areAnyOddGrades = studentGrades.some(isOdd);
const areAllEvenGrades = studentGrades.every(isEven);
const areAllOddGrades = studentGrades.every(isOdd);

console.log(studentGrades);

console.log('Are there any even grades?', areAnyEvenGrades);
console.log('Are there any odd grades?', areAnyOddGrades);
console.log('Are all even grades?', areAllEvenGrades);
console.log('Are all odd grades?', areAllOddGrades);


// Funkcje: filtrująca pola obiektu, sortująca pola obiektu,


const car = {
  maximumSpeed: 300,
  isEngineRunning: false,
  hasRadio: true,
  isRadioBroken: true,
  numberOfWheels: 4,
  gearBox: 'automatic' // 'manual'
};

function filterOnlyBooleanFields(o) {
  const result = {};

  for (let key in o) {
    const value = o[key];
    if (typeof value === 'boolean') {
      result[key] = value;
    }
  }

  return result;
}

function objectValues(o) {
  const result = [];

  for (let key in o) {
    const value = o[key];
    result.push(value);
  }
  return result;
}

function alphaSort(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

function sortObjectByKeys(o) {
  let keysArray = Object.keys(o);
  const newObject = {};
  const sortedArrayKeys = keysArray.sort(alphaSort);
  sortedArrayKeys.forEach(function (item) {
    console.log(item);
    const value = o[item];
    newObject[item] = value;
  });
  return newObject;
}

console.log(filterOnlyBooleanFields(car));
console.log(objectValues(car));

console.log(sortObjectByKeys(car));
