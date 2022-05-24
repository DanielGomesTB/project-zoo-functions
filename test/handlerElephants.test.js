const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testando handlerElephants', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toContain('Jefferson');
    expect(handlerElephants('averageAge')).toBe(10.5);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('popularity')).toEqual(5);
    expect(handlerElephants('availability')).not.toContain('Monday');
    expect(handlerElephants()).toBeUndefined();
  });
});
