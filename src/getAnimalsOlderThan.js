const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animais = species.find((i) => i.name === animal);
  return animais.residents.every((a) => a.age >= age);
}

module.exports = getAnimalsOlderThan;
