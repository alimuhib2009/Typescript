"use strict";
// Question no. 14
/* 14. Guest List: If you could invite anyone, living or deceased, to dinner,
 who would you invite? Make a list that includes at least three people you’d like to
 invite to dinner. Then use your list to print a message to each person, inviting
  them to dinner.
*/
// Ofcourse I will invite them.
let guestList = ["muhammad Aqid", "Hasnain subhani", "huzaifa jahangir"];
for (let i = 0; i < guestList.length; i++) {
    console.log("---------------------------------------------------------------------------");
    console.log(`  You're Invited to Dinner! 
        
        Dear ${guestList[i]},
        
        Hi, I hope you are well. I decided to get together with you at dinner, So you are invited for dinner. I will be glad of your presence.
        Date: 26-05-2024
        Time: 10PM
        Location: At my home.
        
        Ali Muhib.
        
        `);
    console.log("--------------------------------------------------------------------------");
}
;
