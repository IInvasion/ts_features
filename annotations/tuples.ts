const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// const cola = ['brown', true, 40];
// cola[1] = 'black';
const cola: [string, boolean, number] = ['brown', true, 40];
// cola[1] = 'black';

// Type alias
type Drink = [string, boolean, number];
const cherryCola: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const coffee: Drink = ['black', true, 0];

// Почему не используются часто Tuple - потому что не особенно понятно понять с чем мы работаем. В отличие от объекта.
const carSpecs: [number, number] = [400, 3353]; // ?? говорят, что именно поэтому не используются Tuple.

const carSpecsObj = {
  horsepower: 400,
  weight: 3354
}