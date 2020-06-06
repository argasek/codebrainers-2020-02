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
    return keysArray.sort(alphaSort);
}

console.log(filterOnlyBooleanFields(car));
console.log(objectValues(car));

console.log(sortObjectByKeys(car));