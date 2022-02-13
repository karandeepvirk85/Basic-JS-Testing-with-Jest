const { expect } = require('@jest/globals');
const substract = require('./substract');

test('It should substract two numbers',()=>{
    expect(substract(10,4)).toBe(6)
});