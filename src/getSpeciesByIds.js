const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// function getSpeciesByIds(id) {
//   if (id === undefined) return []
//   return species.filter((i) => {
//     if (i.id === id)  return i
//   })
// }

function getSpeciesByIds(...ids) {
  return species.filter((animal) => ids.includes(animal.id));
}

module.exports = getSpeciesByIds;
