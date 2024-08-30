"use strict";
// Question no. 24
/* 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */
// • Tests for equality and inequality with strings ############################################################
console.log("-----------------------------------------------------------------------------------------------------");
let fruit = `banana`;
console.log('equality result :', fruit === 'banana');
console.log('inequality result :', fruit !== 'banana');
console.log("-----------------------------------------------------------------------------------------------------");
// • Tests using the lower case function ###############################################################
console.log("-----------------------------------------------------------------------------------------------------");
let vegatable = 'Potato';
console.log('isLowercase :', vegatable.toLowerCase() == 'potato');
console.log('isLowercase :', vegatable == 'potato');
console.log("-----------------------------------------------------------------------------------------------------");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to ##############################################################
console.log("-----------------------------------------------------------------------------------------------------");
let num1 = 5;
let num2 = 4;
console.log('isEqual :', num1 == num2);
console.log('isInequal :', num1 != num2);
console.log('isfalse :', num1 < num2);
console.log('istrue :', num1 > num2);
console.log('is <= :', num1 <= num2);
console.log('is >= : ', num1 >= num2);
console.log("-----------------------------------------------------------------------------------------------------");
//• Tests using "and" and "or" operators ###########################################################
console.log("-----------------------------------------------------------------------------------------------------");
let colour1 = "black";
let colour2 = "white";
console.log('isTure :', colour1 == 'black' && colour2 == 'white'); //true
console.log('isfalse :', colour1 == 'white' && colour2 == 'white'); //false
console.log('isfalse :', colour1 == 'white' || colour2 == 'black'); //false
console.log('isfalse :', colour1 == 'white' || colour2 == 'white'); //true
console.log("-----------------------------------------------------------------------------------------------------");
// • Test whether an item is in a array #############################################################
console.log("-----------------------------------------------------------------------------------------------------");
let numbers = [1, 2, 3];
console.log('isItem :', numbers.includes(1));
console.log('isItem :', !numbers.includes(1));
console.log("-----------------------------------------------------------------------------------------------------");
// • Test whether an item is not in a array 
console.log("-----------------------------------------------------------------------------------------------------");
console.log('isItem :', !numbers.includes(5)); //true
console.log('isItem :', numbers.includes(5));
console.log("-----------------------------------------------------------------------------------------------------");
