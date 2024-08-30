//Question no. 16
/*
16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.

• Use append() to add one new guest to the end of your list.

• Print a new set of invitation messages, one for each person in your list.

*/


let guestList = ["muhammad Aqid", "Hasnain subhani", "huzaifa jahangir"];

//here i'm changing in list hunain alam make the dinner.
guestList.splice(1,1,'hunain Alam');

//########################################################################################

// I found A bigger dinner Table, So I want to invite three more guest. 

//Using "Unshift" method to Add one guest in the beginning of an array.

guestList.unshift("ali nabeel");

//Using "splice" method to Add one guest in the middle of an array.
guestList.splice(2,0,"hamza Jahangir");

//Using "push" method to Add one guest in the end of an array. 
guestList.push("muhammad Ammar");


for(let i=0; i < guestList.length; i++){
  
console.log("---------------------------------------------------------------------------");


    console.log(`  You're Invited to Dinner! 
        
        Dear ${guestList[i]},
        
        Hi, I hope you are well. I decided to get together with you at dinner,
        So you are invited for dinner. I will be glad of your presence.

        Date: 26-05-2024
        Time: 10PM
        Location: At my home.
        
        Ali Muhib.
        
        `);

console.log("--------------------------------------------------------------------------");
            
};

console.log("------------------------------------------------------------------------------");

console.log("I found a bigger Dinner Table, So i decide to invite three more guest.");

console.log("-----------------------------------------------------------------------------");
