// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var number=prompt("enter number");
if (number<0){
    number=prompt("enter positve number")
}
else{
    document.write("number: " + number + "<br>") 
   document.write("round of value: " + Math.round(number)+"<br>") 
   document.write("floor of value: " + Math.floor(number)+"<br>") 
   document.write("ceil of value: " + Math.ceil(number)) 
}

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var number=prompt("enter number");
if (number>0){
    number=prompt("enter negative number")
}
else{
    document.write("number: " + number + "<br>") 
   document.write("round of value: " + Math.round(number)+"<br>") 
   document.write("floor of value: " + Math.floor(number)+"<br>") 
   document.write("ceil of value: " + Math.ceil(number)) 
}


// 3. Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var number=prompt("enter number");
document.write("absolute value is: " + Math.abs(number))
   

// 4.Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.

var diceRoll = Math.ceil( Math.random() * 6 )
document.write("random dice value " + diceRoll)

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var coinToss = Math.ceil( Math.random() * 2 )
if (coinToss==1){
    document.write("tail")}
else{
    document.write("head")
}

// 6. Write a program that shows a random number between 1 
// and 100 in your browser.

var randomNumber =Math.ceil ( Math.random() * 100 )
document.write("random number is: " + randomNumber)

// 7. Write a program that asks the user about his weight. Parse the
// user input and display his weight in your browser. Possible user
// inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var weight = prompt(`Please enter your weight in kilograms: `);
if (weight.includes('kgs')) {
    var updatedWeight = weight.replace('kgs', 'kilograms');
    document.write(`The weight of user is: ${updatedWeight}`);
}
else if (weight.includes('kilograms')) {
    document.write(`The weight of user is: ${weight}`);
}
else {
    document.write(`The weight of user is: ${weight} kilograms`);
}

// 8. Write a program that stores a random secret number from 1
// to 10 in a variable. Ask the user to input a number between 1
// and 10. If the user input equals the secret number, congratulate
// the user.

var userInput = +prompt(`Enter a secret number from 1 to 10: `);
var secretNum = Math.ceil(Math.random() * 10);
if (secretNum == userInput) {
    document.write(`Congratulations! `);
}
else {
    document.write(`Try Again! `);
}