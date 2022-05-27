const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// acha as espécies
const getSpecies = (person) => {
  const animals = species.filter((animal) => person.includes(animal.id));
  return animals.map((animal) => animal.name);
};

// acha os locais
const getLocations = (animals) => {
  const animal = species.filter((animalSpecie) => animals.includes(animalSpecie.name));
  return animal.map((animalSpecie) => animalSpecie.location);
};

// formata as informações
const formating = (person) => {
  const obj = {
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: getSpecies(person.responsibleFor),
    locations: getLocations(getSpecies(person.responsibleFor)),
  };
  return obj;
};

// acha a pessoa por id ou nome
const findPerson = (obj) => {
  const { name } = obj;
  if (!obj.id) {
    return employees.find((person) => person.firstName === name || person.lastName === name);
  }
  return employees.find((person) => person.id === obj.id);
};

// sem parâmetros retorna todas as pessoas para o formating
const noParameters = () => employees.map((person) => formating(person));

function getEmployeesCoverage(obj) {
  // seu código aqui
  if (!obj) return noParameters();
  const person = findPerson(obj);
  // lança o erro
  if (!person) throw new Error('Informações inválidas');
  return formating(person);
}

module.exports = getEmployeesCoverage;
