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

const obj = {
  foo: 1,
  bar: 2,
  fum: 3,
  quux: 4,
};

for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

console.log(obj.foo);


