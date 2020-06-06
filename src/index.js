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

  for (let key in car) {
    const value = car[key];
    console.log(key, ':', value);
  }

  // …

  return result;
}
