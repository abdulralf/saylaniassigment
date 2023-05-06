// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
var multi_array = [['mehran', 'cultus', 'aqua'], ['cg', 'gs', 'ybr']];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:
var my_matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

// 3. Write a program to print numeric counting from 1 to 10.
for (var i = 1; i < 11; i++) {
    document.write(i + '<br />');
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
var table_num = +prompt('Enter number for table');
var table_len = +prompt('Enter length of table');
document.write(' Multiplication table of ' + table_len + '<br />');
document.write(' Length ' + table_num + '<br />');
for (var i = 1; i <= table_len; i++) {
    document.write(table_num + ' x ' + i + ' = ' + table_num * i + '<br />');
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawbwerry'];
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + '<br />');
}
for (var i = 0; i < fruits.length; i++) {
    document.write('Element at index ' + i + ' is ' + fruits[i] + '<br />');
}

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write('Counting:' + '<br />');
for (var i = 1; i <= 15; i++) {
    document.write(i + ',');
}
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write('Reverse counting:' + '<br />');
for (var i = 10; i >= 1; i--) {
    document.write(i + ',');
}
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write('Even:' + '<br />');
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ',');
}
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write('Odd:' + '<br />');
for (var i = 1; i <= 19; i += 2) {
    document.write(i + ',');
}
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write('Series:' + '<br />');
for (var i = 0; i <= 20; i += 2) {
    document.write(i + 'k,');
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var user_input = prompt('Welcome to ABC bakery, what do you want sir/madam?');
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === user_input) {
        document.write(user_input + ' is available in our bakery at index ' + i);
        break;
    }
    else {
        document.write(' We are sorry ' + user_input + ' is not available in our bakery. ');
        break;
    }
}

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
var arr = [24, 53, 78, 91, 12];
var updated_arr = arr.sort();
var arr_length = arr.length - 1;
var largest_num = updated_arr[arr_length];
document.write('Array items: ' + arr + '<br />');
document.write('Largest Number: ' + largest_num);

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
var arr = [24, 53, 78, 91, 12];
var updated_arr = arr.sort();
var smallest_num = updated_arr[0];
document.write('Array items: ' + arr + '<br />');
document.write('Smallest Number: ' + smallest_num);

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
for (i = 5; i <= 100; i += 5) {
    document.write(i + ',');
}