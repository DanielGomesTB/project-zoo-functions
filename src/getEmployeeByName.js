const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees.find((i) => i.firstName === employeeName || i.lastName === employeeName);
}

module.exports = getEmployeeByName;
