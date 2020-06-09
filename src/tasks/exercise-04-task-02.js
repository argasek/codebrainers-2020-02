// Task 2
// 1) Implement function compareCars(carA, carB) which returns true if given car objects are same ("sameness", i.e.
// identical in respect to keys present and their values). If any object given has different set of keys, return false.
// If set of keys is the same, but values are different, also return false.
//
// Assume the car object always consists of keys like in the
// example below:

const car = {
  gearBox: 'automatic', // 'manual'
  hasRadio: true,
  isEngineRunning: false,
  isRadioBroken: true,
  maximumSpeed: 300,
  numberOfWheels: 4,
};

// 2) Implement function which given array of car objects (like the above), sorts this array according to car speed
// from slowest to fastest. If maximumSpeed information is missing or incorrect, do not include this car in a new array.
//
// Example:

const carsArray = [
  {
    gearBox: 'manual', // 'manual'
    hasRadio: false,
    isEngineRunning: false,
    isRadioBroken: true,
    maximumSpeed: 178,
    numberOfWheels: 3,
  },
  {
    gearBox: 'manual', // 'manual'
  },
  {
    gearBox: 'automatic', // 'manual'
    hasRadio: true,
    isEngineRunning: false,
    isRadioBroken: true,
    maximumSpeed: 50,
    numberOfWheels: 4,
  },
  {
    gearBox: 'automatic', // 'manual'
    hasRadio: true,
    isEngineRunning: false,
    isRadioBroken: true,
    maximumSpeed: 345,
    numberOfWheels: 2,
  }
];

// 'key' is using so-called default argument
function sortCars(cars, key = 'maximumSpeed') {
  const filteredCars = cars.filter(function(car) { return car[key] !== undefined });
  return filteredCars.sort(function(a, b) { return a[key] - b[key] });
}

const actualResult = sortCars(carsArray);

// Expected result:
const expectedResult = [
  {
    gearBox: 'automatic', // 'manual'
    hasRadio: true,
    isEngineRunning: false,
    isRadioBroken: true,
    maximumSpeed: 50,
    numberOfWheels: 4,
  },
  {
    gearBox: 'manual', // 'manual'
    hasRadio: false,
    isEngineRunning: false,
    isRadioBroken: true,
    maximumSpeed: 178,
    numberOfWheels: 3,
  },
  {
    gearBox: 'automatic', // 'manual'
    hasRadio: true,
    isEngineRunning: false,
    isRadioBroken: true,
    maximumSpeed: 345,
    numberOfWheels: 2,
  }
];

/**
 *
 * @param {object} carA
 * @param {object} carB
 * @return {boolean}
 */
function compareCars(carA, carB) {
  if (typeof carA !== "object" || typeof carB !== "object") {
    console.log(`Not equal: carA is ${typeof carA}, carB is ${typeof carB}`);
    return false;
  }

  const keys = Object.keys(carA);
  if (keys.length === Object.keys(carB).length) {
    return keys.every(function (key) {
      console.log(key, carA[key], carB[key]);
      return carA[key] === carB[key];
    })
  }

  return false;
}


function compareExpectedToActual() {
  return expectedResult.every(function(item, index) {
    return compareCars(item, actualResult[index]);
  });
}

console.log('Is sortCarsByKey() working as expected?', compareExpectedToActual());

