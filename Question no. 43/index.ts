//  Question no. 43

/*
43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.

 */



function Show_Magicians(magician:string[]){
    magician.forEach(name => console.log(name));
}

function make_great(magician:string[]){
  return  magician.map(name => `The Great ${name}`);
}

let magician_name : string[] = ["john" , "don" , "kalvin"] ;

let great_magician = make_great(magician_name);

let copy_magician_name = magician_name.slice();

let copy_great_magician = make_great(copy_magician_name);

console.log("Original array\n");


Show_Magicians(magician_name)

console.log("\ncopied array\n");

Show_Magicians(copy_great_magician)


 
 

 
 
