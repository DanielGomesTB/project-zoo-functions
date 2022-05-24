const { species } = require('../data/zoo_data');

const getElephants = () =>
  species.find((specie) => specie.name === 'elephants');
  // pega o objeto com o nome de elephants

const averageAge = ({ residents }) =>
  residents.reduce((sum, elephant) => sum + elephant.age, 0) / residents.length;
  // pega os residentes de elefante, soma em sum a idade dos elefantes começando de 0, e divide pelo numero de residents

const computeData = (param, elephants) => {
  // recebe 2 parametros, 1 em formato string e outro chama a função getElephants
  switch (param) {
  case 'count':
    return elephants.residents.length;
    // caso o param seja count ele retorna o numero de residentes em elephants
  case 'names':
    return elephants.residents.map((elephant) => elephant.name);
    // caso o param seja names ele retorna um array com os nomes dos elefantes
  case 'averageAge':
    return averageAge(elephants);
    // caso o param seja averageAge ele retorna a função averageAge
  default:
    return null;
    // caso não tenha parametro ele retorna null
  }
};

const handlerElephants = (param) => {
  // recebe um parametro
  if (param === undefined) {
    return undefined;
    // se não receber parametro retorna undefined
  }
  if (typeof param !== 'string') {
    return 'Parâmetro inválido, é necessário uma string';
    // se o tipo do parametro for diferente de string retorna 'Parâmetro inválido, é necessário uma string'
  }
  const elephants = getElephants();
  // coloca a função getElephants em uma string chamada elephants
  if (Object.keys(elephants).includes(param)) {
    // verifica se nas chaves de elephants tem o parametro passado em handlerElephants
    return elephants[param];
    // retorna os valores encontrados pela chave passada no parametro
  }
  return computeData(param, elephants);
  // retorna a função getElephants como segundo parametro em computeData
};

module.exports = handlerElephants;
