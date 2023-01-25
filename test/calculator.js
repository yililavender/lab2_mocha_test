var expect    = require("chai").expect;
var calculator = require("../app/calculator");

describe(" Test calculator Script", function() {
  describe("all functions accuracy", function() {
    it("Testing add function", function() {
      var result   = calculator.add(3,5)

      expect(result).to.equal(8);
      expect(result).to.equal(0);
    });
  });

  
  describe("mul", function() {
    it("Testing multiply function", function() {
      var result   = calculator.mul(10,5)

      expect(result).to.equal(50);
    //   expect(result).to.equal(0);
    });
  });

  describe("div", function() {
    it("Testing divide", function() {
      var result   = calculator.div(10,5)

      expect(result).to.equal(2);
      expect(result).to.equal(0);

    });
  });

  describe("sub", function() {
    it("Testing minus", function() {
      var result   = calculator.sub(20,5)

      expect(result).to.equal(15);
      expect(result).to.equal(0);
    });
  });

});