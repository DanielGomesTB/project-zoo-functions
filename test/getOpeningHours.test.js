const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
    it('testando getOpeningHours', () => {
        const horarios = {
            Tuesday: { open: 8, close: 6 },
            Wednesday: { open: 8, close: 6 },
            Thursday: { open: 10, close: 8 },
            Friday: { open: 10, close: 8 },
            Saturday: { open: 8, close: 10 },
            Sunday: { open: 8, close: 8 },
            Monday: { open: 0, close: 0 },
        }
        expect(typeof getOpeningHours).toBe('function');
        expect(getOpeningHours()).toEqual(horarios);
        expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
        expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
        expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
        expect(() => getOpeningHours('Thu', '09:00-PM')).toThrow('The day must be valid. Example: Monday');
        expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
        expect(() => getOpeningHours('Saturday', 'C9:00-PM')).toThrow('The hour should represent a number');
        expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
        expect(() => getOpeningHours('Thursday', '30:00-PM')).toThrow('The hour must be between 0 and 12');
        expect(() => getOpeningHours('Thursday', '01:90-PM')).toThrow('The minutes must be between 0 and 59');
    })
});
