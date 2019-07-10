'use strict';
// drill 1
const loaf = {
  flour: 300,
  water: 210
};

console.log(loaf.flour, loaf.water);

loaf.hydration = function () {
  return (this.water / this.flour) * 100;
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



// drill 4 & 5

const char1 = {
  name: 'Aragorn',
  jobTitle: 'Leader',
};
const char2 = {
  name: 'Legolas',
  jobTitle: 'Archer',
};
const char3 = {
  name: 'Gimli',
  jobTitle: 'Killer',
};

const charList = [char1, char2, char3];

for (const index in charList) {
  if (charList[index].jobTitle !== 'Leader') {
    charList[index].boss = 'Aragorn';
  }
  //console.log(`Name: ${charList[index].name}, Job Title: ${charList[index].jobTitle} Boss: ${charList[index].boss ? charList[index].boss : 'Doesn\'t report to anybody'}`);
  console.log(`${charList[index].jobTitle} ${charList[index].name} ${charList[index].boss ? 'reports to ' + charList[index].boss : 'doesn\'t report to anybody'}`);
}


// drill 6

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};

function decodeChar(word) {
  const firstLetter = word[0];
  for (const key in cipher) {
    if (key === firstLetter) {
      return word[cipher[key] - 1];
    }
  }
  return ' ';
}

function decodeWords(msg) {
  const msgList = msg.split(' ');
  let decodedMessage = ''; // why does undefined get returned if we do let decodedMessage; instead of setting it to empty string?
  for (const index in msgList) {
    decodedMessage += decodeChar(msgList[index]);
  }
  return decodedMessage;
}

console.log(decodeWords('craft block argon meter bells brown croon droop'));

// drill 7
function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe: function () {
      console.log(`${this.name} is a ${this.race} from ${this.origin} who uses a(n) ${this.weapon}`);
    },
    evaluateFight: function (character) {
      const dmgGiven = this.attack - character.defense;
      const dmgTaken = this.defense - character.attack;

      return `Your opponent takes ${dmgGiven > 0 ? dmgGiven : 0} and you receive ${dmgTaken > 0 ? dmgTaken : 0}`;
    }
  };
}

const characters = [createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'Wizard Staff'),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'Ring'),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade'),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow')
];

characters.push(createCharacter('Sponge Bob Square Pants', 'sponge bob', 'Sponge', 'Bikini Bottom', 0, 99, 'Hadhafang'));

characters.find((char) => {
  if (char.nickname === 'aragorn') {
    return char.describe();
  }
});

const hobbitArr = characters.filter((char) => {
  if (char.race === 'Hobbit') {
    return char;
  }
});

console.log(hobbitArr[0],hobbitArr[1]);

const attackGreateThanFiveArr = characters.filter((char) => {
  if (char.attack > 5) {
    return char;
  }
});

console.log(attackGreateThanFiveArr[0],attackGreateThanFiveArr[1],attackGreateThanFiveArr[2]);



