//  Question no. 44

/*
44. Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.
 */

function make_sandwiches(...items: string[]){
    console.log("\nmaking a sandwich with following items\n");

    items.forEach(single_item => console.log(single_item))
    
    console.log("\nEnjoy your sandwich!\n");
}

make_sandwiches("Bread", "Spanish", "Tomato", "Chicken", "ketchup", "Mayo")
make_sandwiches("Bread", "Cheese", "Roast-Chicken", "ketchup", "Mayo")
make_sandwiches("Bread", "BlackPaper", "Beef", "ketchup", "Mayo")

