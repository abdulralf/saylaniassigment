// 1. Declare an empty array using JS literal notation to store
// student names in future.
var student_names = [];

// 2. Declare an empty array using JS object notation to store // student names in future.
var student_names = new Array();

// 3. Declare and initialize a strings array.
var animals = ['cat', 'dog', 'mouse'];

// 4. Declare and initialize a numbers array.
var numbers = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.
var my_booleans = [false, true, true, false];

// 6. Declare and initialize a mixed array.
var mixed_array = ['cat', 'dog', 'mouse', 1, 2, 3, 4, 5, false, true, true, false];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
var qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
document.write('Qualifications: <br />')
document.write('1 ) ' + qualifications[0] + '<br />');
document.write('2 ) ' + qualifications[1] + '<br />');
document.write('3 ) ' + qualifications[2] + '<br />');
document.write('4 ) ' + qualifications[3] + '<br />');
document.write('5 ) ' + qualifications[4] + '<br />');
document.write('6 ) ' + qualifications[5] + '<br />');
document.write('7 ) ' + qualifications[6] + '<br />');
document.write('8 ) ' + qualifications[7] + '<br />');

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
var student_names = new Array(3);
var marks = new Array(3);
student_names[0] = prompt('Enter your name');
student_names[1] = prompt('Enter your name');
student_names[2] = prompt('Enter your name');
marks[0] = +prompt('Enter your marks out of 500');
marks[1] = +prompt('Enter your marks out of 500');
marks[2] = +prompt('Enter your marks out of 500');
var percentage1 = (marks[0] / 500) * 100;
var percentage2 = (marks[1] / 500) * 100;
var percentage3 = (marks[2] / 500) * 100;
document.write(`Score of ${student_names[0]} is: ${marks[0]}. Percentage: ${percentage1}%` + '<br>');
document.write(`Score of ${student_names[1]} is: ${marks[1]}. Percentage: ${percentage2}%` + '<br>');
document.write(`Score of ${student_names[2]} is: ${marks[2]}. Percentage: ${percentage3}%` + '<br>');

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
var colors = ['red', 'blue', 'green'];
document.write(colors + '<br />');
var user_color1 = prompt('Enter the color you want');
colors.unshift(user_color1);
document.write(colors + '<br />');
var user_color2 = prompt('Enter the color you want');
colors.push(user_color2);
document.write(colors + '<br />');
colors.unshift('grey', 'aqua');
document.write(colors + '<br />');
colors.shift();
document.write(colors + '<br />');
colors.pop();
document.write(colors + '<br />');
var user_index1 = +prompt('Enter index at which you want to add color');
var user_color3 = prompt('Enter the color you want');
colors.splice(user_index1, 0, user_color3);
document.write(colors + '<br />');
var user_index2 = +prompt('Enter index at which you want to delete')
var number_of_deletions = +prompt('Enter number of colors you want to delete');
colors.splice(user_index2, number_of_deletions);
document.write(colors + '<br />');

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
var student_scores = [320, 230, 480, 120];
document.write(`Score of Students: ${student_scores}` + '<br />');
var sorted_score = student_scores.sort();
document.write(`Ordered Score of Students: ${sorted_score}` + '<br />');

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array
document.write('Cities list:' + '<br />');
var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
document.write(`${cities}` + '<br />');
var selected_cities = cities.slice(1, 4);
document.write('Selected Cities list:' + '<br />');
document.write(`${selected_cities}` + '<br />');

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
var arr = [' This ', ' is', ' my ', ' cat '];
arr.join();

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
var arr = ['keyboard', 'mouse', 'printer', 'monitor'];
var output = arr.shift();
console.log(output);
var output = arr.shift();
console.log(output);
var output = arr.shift();
console.log(output);
var output = arr.shift();
console.log(output);

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)
var arr = ['keyboard', 'mouse', 'printer', 'monitor'];
var output = arr.pop();
console.log(output);
var output = arr.pop();
console.log(output);
var output = arr.pop();
console.log(output);
var output = arr.pop();
console.log(output);

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:
var mobile_companies = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
document.write(`<select> 
<option>${mobile_companies[0]} </option>
<option>${mobile_companies[1]} </option>
<option>${mobile_companies[2]} </option>
<option>${mobile_companies[3]} </option>
<option>${mobile_companies[4]} </option>
<option>${mobile_companies[5]} </option></select>`)