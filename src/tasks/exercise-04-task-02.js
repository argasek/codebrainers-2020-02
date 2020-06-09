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

const Car1 = {
    maximumspeed: 300,
    isEnginestart: false,
    hasRadio: true,
    isRadiobroekn: false,
    mumberofwheel: 4,
    geerBox: true,
};

const Car2 = {
    maximumspeed: 300,
    isEnginestart: false,
    hasRadio: true,
    isRadiobroekn: false,
    mumberofwheel: 4,
    geerBox: true,
};

function valuesArray(obj) {
    const result = [];

    for (let key in obj) {
        const value = obj[key];
        result.push(value);
    }

    return result;
}

console.log(valuesArray(Car1));


function keyArray(obj) {

    return keysarray = Object.keys(obj);
}
console.log(keyArray(Car1));




function arraysIdentity(arr1, arr2) {

    if (arr1.length === arr2.length) {
        let result = 0;
        for (let i in arr1) {
            if (arr1[i] === arr2[i]) {
                result++;
            }
        }
        if (result === arr1.length) {
            return true;
        }

    } else { return false; }
}


const varr1 = valuesArray(Car1);
const varr2 = valuesArray(Car2);
const karr1 = keyArray(Car1);
const karr2 = keyArray(Car2);


function arraysCal() {
    if (arraysIdentity(varr1, varr2) && arraysIdentity(karr1, karr2)) {
        return `${true} :D`
    } else { return `${false} :(`; }

}


const resultident = arraysCal()
console.log("object 1 is the same as object 2 ? :" + resultident);


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
  // ...
}

const output = sortCarsBySpeed(input);

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

}

