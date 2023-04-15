const Port = require("../src/Port.js");

describe("Port", () => {
  it("has a starting port", () => {
    const ship = new Ship(port);
    expect(ship.currentPort).toBe(port);
  });
});
