const { expect } = require('@jest/globals');
const clonearray = require('./cloneArray');

test('It should clone the array',()=>{
    array = [1,3,4,5];
    expect(clonearray(array)).toEqual(array);
    
    // cloned arrary is different than array being passed.
    expect(clonearray(array)).not.toBe(array);
});