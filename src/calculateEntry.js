const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  let crianca = 0;
  let adulto = 0;
  let idoso = 0;
  entrants.forEach((i) => {
    if (i.age < 18) crianca += 1;
    if (i.age >= 18 && i.age < 50) adulto += 1;
    if (i.age >= 50) idoso += 1;
  });
  const objeto = { child: crianca, adult: adulto, senior: idoso };
  return objeto;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const quantidade = countEntrants(entrants);
  return quantidade.child * 20.99 + quantidade.adult * 49.99 + quantidade.senior * 24.99;
}

module.exports = { calculateEntry, countEntrants };
