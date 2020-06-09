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

const input = [
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

function sortCarsBySpeed(cars) {
  let sortedCars = []
  for (let car in cars) {
    if (cars[car].maximumSpeed) {
      sortedCars.push(cars[car]);
    }
  }
  return sortedCars.sort(
    function (a, b) { return a.maximumSpeed - b.maximumSpeed }
  )
}


console.log(sortCarsBySpeed(input))
// Expected result:
const result = [
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
  carAstring = ''
  carBstring = ''
  for (let key in carA) {
    value = carA[key]
    carAstring += key
    carAstring += value
  }
  for (let key in carB) {
    value = carB[key]
    carBstring += key
    carBstring += value
  }
  if (carAstring === carBstring) {
    return true
  } else {
    return false
  }
}
carA = {
  gearBox: 'automatic', // 'manual'
  hasRadio: true,
  isEngineRunning: false,
  isRadioBroken: true,
  maximumSpeed: 50,
  numberOfWheels: 4,
}

carB = {
  gearBox: 'automatic', // 'manual'
  hasRadio: true,
  isEngineRunning: false,
  isRadioBroken: true,
  maximumSpeed: 50,
  numberOfWheels: 4,
}
console.log(compareCars(carA, carB))