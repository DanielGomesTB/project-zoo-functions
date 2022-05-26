const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animais = species.map((i) => i.name);
const weekDays = ['Sunday', 'Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Tuesday'];
const animalDisponibility = (animalName) => species.find((i) => i.name === animalName).availability;

const filterAnimals = (day) => {
  const speciesArray = species.filter((animal) => animal.availability.includes(day));
  return speciesArray.map((animal) => animal.name);
};

const diaDisponibility = (day) => {
  const obj = {};
  const text = `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
  obj[day] = {
    officeHour: day === 'Monday' ? 'CLOSED' : text,
    exhibition: day === 'Monday' ? 'The zoo will be closed!' : filterAnimals(day),
  };
  return obj;
};

const defautParameter = () => {
  const obj = {};
  weekDays.forEach((day) => {
    const text = `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
    obj[day] = {
      officeHour: day === 'Monday' ? 'CLOSED' : text,
      exhibition: day === 'Monday' ? 'The zoo will be closed!' : filterAnimals(day),
    };
  });
  return obj;
};

const checaParametro = (parameter) => {
  if (animais.includes(parameter)) return 'animal';
  if (weekDays.includes(parameter)) return 'dia';
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  switch (checaParametro(scheduleTarget)) {
  case 'animal':
    return animalDisponibility(scheduleTarget);
  case 'dia':
    return diaDisponibility(scheduleTarget);
  default:
    return defautParameter();
  }
}

module.exports = getSchedule;
