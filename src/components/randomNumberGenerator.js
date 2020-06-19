// function getRandomNumberClassicFunction() {
//   return Math.random();
// }
//
// const getRandomNumberArrowFunction = () => {
//   return Math.random();
// }
//

const getRandomNumber = () => Math.random();

let b = [ 3, 4, 5 ]
  .map(x => x * x)
  .filter(x => x > 16)
  .reduce((prev, current) => prev + current, 0);

console.log(b);



