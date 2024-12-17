//EXAMPLE COMMON JS
const circumference = require('./concepts/modules/module.js'); 
console.log(circumference.area(80));

//MODULE EXPORTS
const Square = require('./concepts/modules/square.js');
const myNewSquare = new Square(4);
console.log(myNewSquare.width)

// import { numbers } from "./concepts/modules/numbers.js";
// numbers(); //ES MODULES WITH .MJS