//Question no. 41

/* 
41. Magicians: Make a array of magician’s names. Pass the array to a function
*/
 
function Show_Magicians(magician:string[]){
        magician.forEach(name => console.log(name));
}

let magician_name : string[] = ["john" , "don" , "kalvin"] ;

Show_Magicians(magician_name);