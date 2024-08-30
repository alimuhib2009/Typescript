// Question no. 33

/* 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
7th 8th 9th", and each result should be on a separate line. */

let ordinalNumbers : number[] = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
for (let ordinalnumber of ordinalNumbers){
  if(ordinalNumbers.map(x => x).indexOf(ordinalnumber) == 0){
    console.log(ordinalnumber,"st");
  }else if(ordinalNumbers.map(x => x).indexOf(ordinalnumber) == 1){
    console.log(ordinalnumber,"nd");
  }else if(ordinalNumbers.map(x => x).indexOf(ordinalnumber) == 2){
    console.log(ordinalnumber,"rd");
  }else{
    console.log(ordinalnumber,"th");
  }
};