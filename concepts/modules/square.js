// Assigning to exports will not modify module, must use module.exports
module.exports = class Square {
    constructor(width) {
      this.width = width;
    }
  
    SquareArea() {
      return this.width ** 2;
    }
  };
  