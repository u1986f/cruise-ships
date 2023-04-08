const Port = require('../src/port.js');

describe('Port', () => {
    it('returns an object', () => {
      expect(new Port('')).toBeInstanceOf(Object);
    });
};
  
    it('has a starting port', () => {
      const Port = new Port('Starting Port');
  
      expect(port.name).toEqual('Starting Port');
      });