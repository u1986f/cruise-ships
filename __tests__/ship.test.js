/* globals describe it expect */
const Ship = require('../src/Ship.js')

describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new.Ship()).toBeinstanceOf(Object);
    });
});