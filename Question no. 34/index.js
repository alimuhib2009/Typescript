"use strict";
//Question no. 34
/* 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
pizza names in a array, and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza
instead of printing just the name of the pizza. For each pizza you should
have one line of output containing a simple statement like I like pepperoni
pizza.

• Add a line at the end of your program, outside the for loop, that states
how much you like pizza. The output should consist of three or more lines
about the kinds of pizza you like and then an additional sentence, such as
I really love pizza! */
let favorite_pizzas = ["Peperoni", "Cheese", "Veg"];
for (let i = 0; i < favorite_pizzas.length; i++) {
    // console.log(favorite_pizzas[i]);
    console.log(`I like ${favorite_pizzas[i]} pizza.`);
}
;
console.log(`I really love pizza! I love cheese pizza. Cheese pizza is my favorite with its light and fluffy cheese toppings.
I love Veg pizza. Veg pizza is my favorite with its fresh and healthy vegetables ,
I love pepperoni pizza. Pepperoni pizza is my favorite with its savory combination of spicy pepperoni slices and gooey melted cheese on a crispy crust.`);
