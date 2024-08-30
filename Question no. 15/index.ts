// Question no. 15

/*
15. Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
in your list.
*/


let guestList = ["muhammad Aqid", "Hasnain subhani", "huzaifa jahangir"];


guestList.splice(1,1,"Hunain Alam");


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

console.log(`hasnain Subhani, I'm sorry you are not invite for dinner because you can't make dinner for us, 
So I will invite another who make dinner for us.`);
