const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animais = species.map((i) => i.name);
const weekDays = ['Sunday', 'Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Tuesday'];
// const dias = {
//   Tuesday: {
//     officeHour: 'Open from 8am until 6pm',
//     exhibition: [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
//   },
//   Wednesday: {
//     officeHour: 'Open from 8am until 6pm',
//     exhibition: [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
//   },
//   Thursday: {
//     officeHour: 'Open from 10am until 8pm',
//     exhibition: [ 'lions', 'otters', 'frogs', 'snakes', 'giraffes' ],
//   },
//   Friday: {
//     officeHour: 'Open from 10am until 8pm',
//     exhibition: [ 'tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes' ],
//   },
//   Saturday: {
//     officeHour: 'Open from 8am until 10pm',
//     exhibition: [
//       'lions',  'tigers',
//       'bears',  'penguins',
//       'otters', 'frogs',
//       'snakes', 'elephants',
//     ],
//   },
//   Sunday: {
//     officeHour: 'Open from 8am until 8pm',
//     exhibition: [ 'lions', 'bears', 'penguins', 'snakes', 'elephants' ],
//   },
//   Monday: { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' },
// };
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
