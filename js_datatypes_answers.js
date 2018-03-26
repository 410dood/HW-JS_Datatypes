// Which Data Type?
// A light switch that can be either on or off.
//   - Boolean
// A user's email address.
//   - a string
// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
//   - an array
// A list of student names from our class.
//   - strings
// A list of student names from our class, each with a location.
//   - Objects
// A list of student names from our class, each with a location and each with a list of favorite tv shows.
//   - arrays

// 🔴 **Commit your work.**
// The commit message should read:
// "1st COMMIT - selecting datatypes".

// Make an array that holds all of the colors of the rainbow.
let rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// Write code that will access "blue" from the rainbow array.
console.log(rainbow[4]);

// Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
const bill = [{favoriteFood: "crabs", hobby: "skiing", currentTown: "Denver", favoriteDataType: "string"}]
console.log(bill);
// Write code that will access your hobby from the object that you just created.
console.log(bill[0].hobby);

// "2nd COMMIT - created some data structures and accessed some data".

const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}
// Use crazy Object to log the following.

// "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);
// "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);
// "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);
// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);
// The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1]);

// 🔴 **Commit your work.**
// The commit message should read:
// "3rd commit - performed operations on the crazy object".
// Object-ception
// With the following object:

// const inception = {
//    reality: {
//        dreamLayer1: {
//            dreamLayer2: {
//                dreamLayer3: {
//                    dreamLayer4: {
//                        dreamLayer5: {
//                            dreamLayer6: {
//                                limbo: "Joseph Gordon Levitt"
//                           }
//                        }
//                    }
//                }
//            }
//        }
//    }
// }
// Change the value of limbo to null.

// 🔴 **Commit your work.**
// The commit message should read:
// "4th commit - accessed limbo".
// Bond Films
// Array of objects:
// const bondFilms = [
//   { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
//   { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
//   { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
//   { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
//   { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
//   { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
//   { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
//   { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
//   { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
//   { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
//   { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
//   { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
//   { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
//   { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
//   { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
//   { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
//   { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
//   { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
//   { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
//   { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
//   { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
//   { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
//   { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
// ];
// Yikes. Well, copy the bondFilms array of objects above into your js file. Use for loops and conditionals and methods in order to complete the below:

// Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.
// 🔴 **Commit your work.**
// The commit message should read:
// "5th commit - Made an array of bond titles".
// Create a new array oddBonds, of only the Bond films released on odd-numbered years.
// 🔴 **Commit your work.**
// The commit message should read:
// "6th commit - made an array of odd bonds".
// Determine the total cumulative gross of the Bond franchise, and console.log the result. hint To make the grosses into usable numbers, look into the .replace Javascript method (there are many ways to do this, however). Look into parseInt also.
// 🔴 **Commit your work.**
// The commit message should read:
// "7th commit - determined the bond films gross".
// CSS
// You will be using these CSS skills for tomorrow’s Morning Exercise. You watched these videos this weekend, but we recommend reviewing them again before morning exercise.

// Box Model, 7:17

// CSS Display, 6:24

// Positioning, 11:57

// Units of measure I, 10:25

// Units of measure II, 14:27

// Congrats! You have completed the homework

// Hungry For More?
// CHALLENGE

// bondFilms again!

// Console log the single movie object that contains the actor who starred in the least number of films.
// Expected result:

// { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" }
// You should arrive at this result by comparing the frequency of actors.

// hint: Objects by definition have unique keys. Later in the problem you could create a new object wherein all the Bond actors are keys, and unique, with no doubles.

// another hint: You might come to a place where you will want to iterate over an object. You can iterate over arrays, but did you know you can iterate over objects?

// You can either use Object.keys(), documentation here - Object.keys

// Or, you can use a for ... in loop, documentation here - for ... in


// More on for ... in
// The syntax for iterating over an object with for ... in is:

// for (let key in obj) {
//   // stuff, such as console.log(key)
// }
// Where key is a variable that instantiates for the keys in object, and obj is the name of the object you are iterating over. So, if you just wanted to console.log all the keys in the first bondFilms object, you could write:

// for (let key in bondFilms[0]) {
//   console.log(key);
// }
// Also remember, you can use a variable to access a key in an object, with bracket notation:

// obj[key] will look for the property in the object that corresponds to whatever the variable key is. This is very different to the syntax obj['key'] (notice the quotes) that will look for a key named key, rather than a variable.

// To print all of the values in the first bondFilms object, you could write:

// for (let key in bondFilms[0]) {
//   console.log(bondFilms[0][key]);
// }
// Good luck!

// 🔴 **Commit your work.**
// The commit message should read:
// "8th commit - Humdinger".
// Hungry For Even More?
// Complete this morning's lab

// Complete this afternoon's lab
// ><
