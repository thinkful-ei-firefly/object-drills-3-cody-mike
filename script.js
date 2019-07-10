'use strict';
// drill 1
const loaf = {
  flour: 300,
  water: 210
};

console.log(loaf.flour, loaf.water);

loaf.hydration = function() {
  return (this.water/this.flour) * 100;
};

console.log(loaf.hydration());

// drill 2

const obj2 = {
  foo: 1,
  bar: 2,
  fum: 3,
  quux: 4,
};

for (const key in obj2) {
  console.log(`${key}: ${obj2[key]}`);
}

console.log(obj2.foo);

// drill 3
const obj3 = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
};

console.log(obj3.meals[3]);



// drill 4

const char1 = {
  name: 'Aragorn',
  jobTitle: 'Leader',
};
const char2 = {
  name: 'Legolas',
  jobTitle: 'Archer',
};
const char3 = {
  name: 'Gemli',
  jobTitle: 'Killer',
};

const charList = [char1, char2, char3];

for (const index in charList) {
  console.log(`Name: ${charList[index].name}, Job Title: ${charList[index].jobTitle}`);
}