function drawRandomIndex(items) {
  return Math.floor(Math.random() * items.length);
}

function limitRange(x, min, max) {
  return Math.min(Math.max(Math.round(x), min), max)
}

const deepCopyFunction = (inObject) => {
  let outObject, value, key

  if (typeof inObject !== "object" || inObject === null) {
    return inObject // Return the value if inObject is not an object
  }

  // Create an array or object to hold the values
  outObject = Array.isArray(inObject) ? [] : {}

  for (key in inObject) {
    value = inObject[key]

    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = deepCopyFunction(value)
  }

  return outObject
}

export {
  drawRandomIndex,
  limitRange,
  deepCopyFunction,
};
