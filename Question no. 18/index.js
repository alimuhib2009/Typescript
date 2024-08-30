"use strict";
//Question no. 18
/* 18. Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its
  order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

*/
let country = ["saudia arabia", "united state of america", "dubai", "japan", "germany"];
console.log("-----------------------------------------------------------------------------");
//print in it's original order.
console.log("original order :", country);
console.log("-----------------------------------------------------------------------------");
//print in alphabetical order.
console.log("alphabetical order :", [...country].sort());
console.log("-----------------------------------------------------------------------------");
//showing that my array still in it's original order.
console.log("still in it's original order :", country);
console.log("-----------------------------------------------------------------------------");
//print in reverse alphabetical order.
let fakeList = [...country].sort();
console.log("reverse alphabetical order :", fakeList.reverse());
console.log("-----------------------------------------------------------------------------");
//again showing that my array is still in original order.
console.log("again my array is still in original order :", country);
console.log("-----------------------------------------------------------------------------");
//reverse the order of the list
country.reverse();
console.log("it's order has changed. :", country);
console.log("-----------------------------------------------------------------------------");
//again reverse the order of the list in it's original order.
country.reverse();
console.log("again changed into it's original order : ", country);
console.log("-----------------------------------------------------------------------------");
//Sort the array so it’s stored in alphabetical order.
country.sort();
console.log("sort in alphabetical order :", country);
console.log("-----------------------------------------------------------------------------");
//Sort the array so it's stored in reverse alphabetical order.
country.reverse();
console.log("in reverse alphabetical order :", country);
console.log("-----------------------------------------------------------------------------");
