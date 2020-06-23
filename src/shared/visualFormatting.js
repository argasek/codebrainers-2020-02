import { limitRange } from 'utils';

/**
 * @param {number} coffees Number of coffees
 * @return {string} Returns string like 'coffee0', 'coffee1', …, 'coffee10'
 */
function getCoffeeClassName(coffees) {
  coffees = limitRange(coffees, 0, 10);
  return 'coffee' + coffees;
}

export {
  getCoffeeClassName
};
