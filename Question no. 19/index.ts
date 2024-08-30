// Question no. 19

/* 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
of people you are inviting to dinner.

*/

let guestList = ["muhammad Aqid", "Hasnain subhani", "huzaifa jahangir"];
//                      1                                     4

//##########################################################################################  using this code of line in exercise no. 15

//here i'm changing in list hunain alam make the dinner.
guestList.splice(1,1,'hunain Alam');//2

//########################################################################################## using this code of line in exercise no. 16

// I found A bigger dinner Table, So I want to invite three more guest. 

//Using "Unshift" method to Add one guest in the beginning of an array.

guestList.unshift("ali nabeel");//0

//Using "splice" method to Add one guest in the middle of an array.
guestList.splice(4,0,"hamza Jahangir");//3

//Using "push" method to Add one guest in the end of an array. 
guestList.push("muhammad Ammar");//5

//##########################################################################################

let  guest = guestList.slice(2,4);

guestList.splice(2,2);

/*
console.log(` I just found out that my new dinner table won't arrive in time for the dinner, and I have space for only two guests, So I can invite only two people for dinner.
  `);



 for(let i = 0; i < guestList.length; i++){
    console.log("----------------------------------------------------------------------------------");
    
        console.log(`dear ${guestList[i]} 
            I,m sorry, As you know that I found a bigger dinner table but the table won't arrive in time for the dinner.
            I don't like to say that you are not invited for dinner. 
        `);
    console.log("----------------------------------------------------------------------------------");
 };



for(let i=0; i < guest.length; i++){
  
console.log("---------------------------------------------------------------------------");


    console.log(`  You're Invited to Dinner! 
        
        Dear ${guest[i]},
        
                I hope you are well. I decided to get together with you at dinner,
        So you are still invited for dinner. As you know that I found a bigger dinner table
        but the table won't arrive in time for the dinner, So I have just two person space
        and you are still invited for dinner. 
                     I will be glad of your presence. 

        Date: 26-05-2024
        Time: 10PM
        Location: At my home.
        
        Ali Muhib.
        
        `);

console.log("--------------------------------------------------------------------------");
            
};*/

//removing last two name below 
guest.splice(0,2);

// console.log(guest);

//#############################################################################################

console.log("the number of people I'm inviting to dinner.", guest.length);


