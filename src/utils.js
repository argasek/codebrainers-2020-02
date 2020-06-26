function drawRandomIndex(items) {
  return Math.floor(Math.random() * items.length);
}

function limitRange(x, min, max) {
  return Math.min(Math.max(Math.round(x), min), max)
}

function copyObjectByValue(givenObject) {
  let newObject = {};

  for (const key in givenObject) {
    if (givenObject.hasOwnProperty(key)) {
      newObject[key] = givenObject[key];
    }

  }

  return newObject;
}

function copyListOfObjects(givenList) {
  let newList = [];

  for (let i = 0; i < givenList.length; i++) {

    if (typeof givenList[i] === 'object') {
      newList.push(copyObjectByValue(givenList[i]));
    } else {
      newList.push(givenList[i]);
    }
  }
  return newList;
}

export {
  drawRandomIndex,
  limitRange,
  copyListOfObjects,
};
