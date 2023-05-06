// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
var fName = prompt(`Enter first name: `);
var lName = prompt(`Enter last name: `);
document.write("Good Morning! " + fName + lName);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
var favMobile = prompt(`Enter name of your favourite mobile: `);
document.write(`My favourite phone is: ${favMobile} <br /> Length of string is: ${favMobile.length}`);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
var myCountry = 'Pakistan';
document.write(`String: ${myCountry} <br /> index of 'n' is: ${myCountry.indexOf('n')}`);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
var myString = 'Hello World';
document.write(`String: ${myString} <br /> Last index of 'l' is: ${myString.lastIndexOf('l')}`);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
var myCountry = 'Pakistan';
document.write(`String: ${myCountry} <br /> Character at index 3: ${myCountry[3]}`);

// 6. Repeat Q1 using string concat() method.
var greeting = ' Good Morning! ';
var fName = prompt(`Enter first name: `);
var lName = prompt(`Enter last name: `);
document.write(greeting.concat(fName, " ", lName));

// 7. Write a program to replace the “Hyder” to “Islam” in the word 
// “Hyderabad” and display the result in your browser.
var myString = "Hyderabad";
document.write(`City: ${myString} <br /> After Replacement: ${myString.replace('Hyder', 'Islam')}`);

// 8. Write a program to replace all occurrences of “and” in the 
// string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”; 
var message = 'Ali and Sami are best friends. They play cricket and football together.';
document.write(`message: ${message} <br /> After Replacement: ${message.replaceAll('and', '&')}`)

// 9. Write a program that converts a string “472” to a number 472. 
// Display the values & types in your browser.
var myString = '472';
var myNum = parseInt(myString);
document.write(`Value: ${myString} <br /> Type: ${typeof (myString)} <br /> Value: ${myNum} <br /> Type: ${typeof (myNum)}`);

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
var userString = prompt(`Enter something: `);
document.write(`User Input: ${userString} <br /> Upper Case: ${userString.toUpperCase()}`);

// 11. Write a program that takes user input. Convert and
// show the input in title case.
var userString = prompt(`Enter something: `);
var subString = userString.slice(1);
document.write(`User Input: ${userString} <br /> Title Case: ${userString[0].toUpperCase() + subString}`);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
var num = 35.36;
var sNum = num.toString();
document.write(`Number: ${num} <br /> Result: ${sNum.replace('.', '')}`);

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
var userName = prompt(`Enter username: `);
for (var i = 0; i < userName.length; i++) {
    while (userName[i].charCodeAt() == 33 || userName[i].charCodeAt() == 44 || userName[i].charCodeAt() == 46 || userName[i].charCodeAt() == 64)
        if (userName[i].charCodeAt() == 33 || userName[i].charCodeAt() == 44 || userName[i].charCodeAt() == 46 || userName[i].charCodeAt() == 64) {
            userName = prompt(`Enter valid username`);
        }
}

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var flag = 0;
var userSearch = prompt(`Enter item you want: `).toLowerCase();
for (var i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() == userSearch) {
        flag += 1;
        document.write(`${userSearch} is available at index ${i} in our bakery.`);
    }
}
if (flag == 0) {
    document.write(` We are sorry. ${userSearch} is not available in our bakery`);
}

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
var userPassword = prompt('Enter password: ').toLowerCase();
var num = 0;
var alphabets = 0;
var case2;
var case3;
for (var i = 0; i < userPassword.length; i++) {
    if (userPassword[i].charCodeAt() >= 48 && userPassword[i].charCodeAt() <= 57) {
        num++;
    }
    else if (userPassword[i].charCodeAt() >= 97 && userPassword[i].charCodeAt() <= 122) {
        alphabets++;
    }
}
var case1 = (alphabets < 1 || num < 1);
if (case1) {
    alert(`isn't alphanumeric enter again`);
}
var case2 = (userPassword[0].charCodeAt() >= 48 && userPassword[0].charCodeAt() <= 57);
if (case2) {
    alert(`can't start with number enter again`);
}
var case3 = (userPassword.length < 6);
if (case3) {
    alert(`password length can't be less than 6 enter again`);
}
var finalCase = (case1 == false && case2 == false && case3 == false)
if (finalCase) {
    alert(`password has been validated`);
}

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
var university = 'University of Karachi';
var arr = university.split();
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++)
        document.write(`${arr[i][j]} <br />`);
}

// 17. Write a program to display the last character of a user
// input.
var userInput = prompt(`Enter something`);
var myIndex = userInput.length - 1;
document.write(`User Input: ${userInput} <br />`);
document.write(`Last character of input: ${userInput[myIndex]}`);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
var myString = 'he quick brown fox jumps over the lazy dog'.toLowerCase();
var counter = 0;
for (var i = 0; i < myString.length; i++) {
    if (myString[i] == 't' && myString[++i] == 'h' && myString[++i] == 'e') {
        counter += 1;
    }
}
document.write(`Text: The quick brown fox jumps over the lazy dog <br />`);
document.write(`There are ${counter} occurence(s) of the word 'the' `);