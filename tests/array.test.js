/*contains all tests related to array module
*/

const arr = require('../lib/array')

describe('test the array.js module', () => {
  
test('multiply returns an array and correct products', () => {

    expect(arr.multiply([2,3,5,6],[9,7,0,2])).toStrictEqual([18,21,0,12])
    expect(arr.multiply([2,3,5,6], [9,7,0,-2])).toStrictEqual([18,21,0,-12])
    expect(arr.multiply([2,3,5,6], [9])).toStrictEqual(false)
    expect(arr.multiply([], [])).toStrictEqual(false)
  
});


});

