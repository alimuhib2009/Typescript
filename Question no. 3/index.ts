//Question no. 3

// 3. Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.


//             FOR UPPERCASE


let myName = "ali Muhib";

console.log("uppercase: ",myName.toUpperCase());


console.log("-------------------------------------");


//             FOR LOWERCASE


console.log("lowercase: ",myName.toLowerCase());


console.log("-------------------------------------");

//             FOR TITLECASE


console.log("titlecase: ",myName.replace(/\b\w/g, (char) => char.toUpperCase()));

console.log("-------------------------------------");

