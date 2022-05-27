const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const oldestAnimal = (firstAnimal) => {
  const animais = species.find((animal) => animal.id === firstAnimal).residents;
  let oldest = 0;
  animais.forEach((i) => {
    if (i.age > oldest) oldest = i.age;
  });
  return animais.find((animal) => animal.age === oldest);
};

const firsSpecie = (person) => person.responsibleFor[0];

const findingPerson = (id) => employees.find((person) => person.id === id);

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const person = findingPerson(id);
  const firstAnimal = firsSpecie(person);
  const older = oldestAnimal(firstAnimal);
  return [older.name, older.sex, older.age];
}

module.exports = getOldestFromFirstSpecies;
