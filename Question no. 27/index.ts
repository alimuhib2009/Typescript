// Question no. 27

/* 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien. */

console.log("------------------------------------------------------------------------------");


let alien_colour = "green";

if(alien_colour === 'green') {
    console.log("the player earned 5 points.");
}else if (alien_colour === 'yellow') {
    console.log("the player earned 10 points.");
}else if (alien_colour === 'red') {
    console.log("the player earned 15 points.");
};

console.log("------------------------------------------------------------------------------");

alien_colour = "yellow";

if(alien_colour === 'green') {
    console.log("the player earned 5 points.");
}else if (alien_colour === 'yellow') {
    console.log("the player earned 10 points.");
}else if (alien_colour === 'red') {
    console.log("the player earned 15 points.");
};

console.log("------------------------------------------------------------------------------");

alien_colour = "red";

if(alien_colour === 'green') {
    console.log("the player earned 5 points.");
}else if (alien_colour === 'yellow') {
    console.log("the player earned 10 points.");
}else if (alien_colour === 'red') {
    console.log("the player earned 15 points.");
};

console.log("------------------------------------------------------------------------------");