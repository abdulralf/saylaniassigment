// 1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).
var letter = prompt("enter letter")
console.log(letter. charCodeAt(0))

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
var a = prompt("enter first number")
var b = prompt("enter second number")
if (a>b){
    console.log("a")
}
else if (a<b){
    console.log("b")
}
else {
   console.log(a + "==" + b)
} 

// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.
var number = prompt("enter number")
if (number > 0) {
    console.log("positive")
}
else if (number < 0) {
    console.log("negative")
}
else {
    console.log("zero")
}

// 4. Write a program that takes a character (i.e. string of 
//     length 1) and returns true if it is a vowel, false otherwise
var vowel = prompt("enter vowel")
if (vowel.length == 1) {
    if (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel== "u") {
        console.log(vowel)
    }
    else {
        console.log("not a vowel")
    }
}
else{
    console.log("please enter a single character")
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// // “Incorrect password” otherwise.
var password1 = "rafay123";
var password = prompt('Enter your password: ');
if (password == false){
    alert('please enter password')
}
else{
    if(password1 == password){
        console.log('the password is correct');
    }
    else{
        console.log('the password is incorrect');
    }
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}
console.log(greeting)

// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements
var time = prompt('enter time:');
if (time < 1900) {
    console.log("It is before 7pm");
}
else if (time >= 0000 && time < 1200) {
    console.log("good morning");
}
else if (time >= 1200 && time < 1700) {
    console.log("good afternoon");
}
else if (time >= 1700 && time < 2100) {
    console.log("good evining");
}
else if (time >= 2100 && time < 2359) {
    console.log("good night");
}
else {
    console.log("It is after 2400");
}
