function drawRandomIndex(items) {
  return Math.floor(Math.random() * items.length);
}

function limitRange(x, min, max) {
  return Math.min(Math.max(Math.round(x), min), max)
}

export {
  drawRandomIndex,
  limitRange,
};
