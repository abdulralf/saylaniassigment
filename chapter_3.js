// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.
var age=23;
alert("i am "+ age +" years old")

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.
let numVisits = localStorage.getItem('numVisits');
if (numVisits === null) {
  numVisits = 1;
} else {
  numVisits = parseInt(numVisits) + 1;
}
localStorage.setItem('numVisits', numVisits);
alert("You have visited this site" + numVisits+ " times.");

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:
var birthYear=1999;
document.write("my birth year is "+ birthYear)
document.write("data type of my decleared variable is "+ typeof(birthYear))

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var visitorName = "Abdul Rafay"
var Quantity = 5
var productTitle = "T-Shirts"
document.write(visitorName +" ordered " + Quantity +" " + productTitle +" from AR stores" )