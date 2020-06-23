const codeBrainersStudents = [
  {
    id: 1,
    name: 'Michał K.',
    coffees: 1
  },
  {
    id: 2,
    name: 'Michał M.',
    coffees: 1
  },
  {
    id: 3,
    name: 'Joanna',
    coffees: 3
  },
  {
    id: 4,
    name: 'Karolina',
    coffees: 4
  },
  {
    id: 5,
    name: 'Grzegorz',
    coffees: 1
  },
  {
    id: 6,
    name: 'Damian',
    coffees: 1
  },
  {
    id: 7,
    // Jedna kawka od Michałów i Damiana!
    name: 'Sabina',
    coffees: 2
  },
  {
    id: 8,
    name: 'Kamila',
    coffees: 0
  },
  {
    id: 9,
    name: 'Maksym',
    coffees: 3
  }

];

const comparator = ({ key, direction }) => (a, b) => a[key] === b[key] ? 0 : [ a[key] < b[key], direction === "desc" ].map(x => x ? -1 : 1).reduce((p, n) => p * n, 1);
const sort = (criteria) => (a, b) => criteria.map(criterion => comparator(criterion)(a, b)).reduce((previous, next) => previous ? previous : next, 0);
const sortStudents = (items, criteria) => items.sort(sort(criteria));


export {
  codeBrainersStudents,
  sortStudents,
};