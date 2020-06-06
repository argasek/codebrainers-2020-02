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

console.log(filterOnlyBooleanFields(car));
