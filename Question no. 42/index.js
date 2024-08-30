"use strict";
// Question no. 42
/* 42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified. */
function Show_Magicians(magician) {
    magician.forEach(name => console.log(name));
}
function make_great(magician) {
    magician.forEach(name => console.log(`The Great ${name}`));
}
let magician_name = ["john", "don", "kalvin"];
make_great(magician_name);
