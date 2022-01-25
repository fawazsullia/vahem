const valid = require('../lib/valid.js')

describe('validation module testing', () => {
  
test('lenght should return the length of a string', () => {
    expect(valid.length("fawazsullia")).toBe(11);
    expect(valid.length("SomeRandom heyheyhey sajdan")).toBe(27);
    expect(valid.length("45646548")).toBe(8);
    
    
});



});

