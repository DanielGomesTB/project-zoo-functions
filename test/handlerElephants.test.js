const { getElephants, averageAge, computeData, handlerElephants } = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testar getElephants', () => {
    expect(typeof getElephants).toBe('function');
    expect(typeof getElephants()).toBe('object');
  });
  it('Testando averageAge', () => {
    expect(typeof averageAge).toBe('function');
    expect(averageAge(getElephants())).toEqual(10.5);
    expect(averageAge(getElephants())).not.toEqual(0);
  });
  it('Testando computeData', () => {
    expect(typeof computeData).toBe('function');
    expect(computeData()).toEqual(null);
    expect(computeData('count', getElephants())).toEqual(4);
    expect(computeData('names', getElephants())).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(computeData('averageAge', getElephants())).toEqual(averageAge(getElephants()));
  });
  it('Testando handlerElephants', () => {
    const disponivel = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(typeof handlerElephants).toBe('function');
    expect(handlerElephants()).toEqual(undefined);
    expect(handlerElephants(1)).toEqual('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants('availability')).toEqual(disponivel);
  });
});
