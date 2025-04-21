"use strict";
    
import _ from 'lodash';
import MathStuff, { addThreeNumbers } from "./mathUtils.js";

const mathThing = new MathStuff();

console.log(mathThing.PI); 
console.log(addThreeNumbers(6,8,33));

_.sum([4, 2, 8, 9]);
console.log(_.sum([4, 2, 8, 9])); 

_.multiply([15,3]);
console.log(_.multiply(15,3));


import happyOrSad, { smile } from  "./stringUtils.js"; //importing default and named exports

 
const happySad = new happyOrSad();
console.log(happySad.happy);
console.log(happySad.sad);
console.log(smile(":)"));
console.log(smile(":("));