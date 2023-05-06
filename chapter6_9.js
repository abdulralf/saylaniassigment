// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var a=10;
document.write('Result:' + '<br/>' +  'the value of a is:' + a + "<br/>" )

document.write('the value of ++a is:' + ++a + "<br/>")
document.write('now the value of a is:' + a + "<br/>" )

document.write('the value of a++ is:' + a++ + "<br/>")
document.write('now the value of a is:' + a + "<br/>" )

document.write('the value of --a is:' + --a + "<br/>")
document.write('now the value of a is:' + a + "<br/>" )

document.write('the value of a-- is:' + a-- + "<br/>")
document.write('now the value of a is:' + a + "<br/>" )

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
var result = --a - --b + ++b + b--; 3
// Explain the output at each stage:
--a; 1
--a - --b; 1
--a - --b + ++b; 2
--a - --b + ++b + b--; 3

// 3. Write a program that takes input a name from user &
// greet the user.
var name = prompt("enter your name");
alert ("Good morning " +  name)


// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
var number = prompt("enter number for multiplication table: ")
if(number == ''){
    document.write('5 ' + ' X ' + '1 ' + '= ' + 5*1 + '<br />')
    document.write('5 ' + ' X ' + '2 ' + '= ' + 5*2 + '<br />')
    document.write('5 ' + ' X ' + '3 ' + '= ' + 5*3 + '<br />')
    document.write('5 ' + ' X ' + '4 ' + '= ' + 5*4 + '<br />')
    document.write('5 ' + ' X ' + '5 ' + '= ' + 5*5 + '<br />')
    document.write('5 ' + ' X ' + '6 ' + '= ' + 5*6 + '<br />')
    document.write('5 ' + ' X ' + '7 ' + '= ' + 5*7 + '<br />')
    document.write('5 ' + ' X ' + '8 ' + '= ' + 5*8 + '<br />')
    document.write('5 ' + ' X ' + '9 ' + '= ' + 5*9 + '<br />')
    document.write('5 ' + ' X ' + '10 ' + '= ' + 5*10 + '<br />')
    document.write('5 ' + ' X ' + '11 ' + '= ' + 5*11 + '<br />')
    document.write('5 ' + ' X ' + '12 ' + '= ' + 5*12 + '<br />')
}
else{
    document.write(number + ' X ' + '1 ' + '= ' + number*1 + '<br />')
    document.write(number + ' X ' + '2 ' + '= ' + number*2 + '<br />')
    document.write(number + ' X ' + '3 ' + '= ' + number*3 + '<br />')
    document.write(number + ' X ' + '4 ' + '= ' + number*4 + '<br />')
    document.write(number + ' X ' + number + '= ' + number*number + '<br />')
    document.write(number + ' X ' + '6 ' + '= ' + number*6 + '<br />')
    document.write(number + ' X ' + '7 ' + '= ' + number*7 + '<br />')
    document.write(number + ' X ' + '8 ' + '= ' + number*8 + '<br />')
    document.write(number + ' X ' + '9 ' + '= ' + number*9 + '<br />')
    document.write(number + ' X ' + '10 ' + '= ' + number*10 + '<br />')
    document.write(number + ' X ' + '11 ' + '= ' + number*11 + '<br />')
    document.write(number + ' X ' + '12 ' + '= ' + number*12 + '<br />')
}

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var sbj1 = prompt('enter name of subject: ')
var sbj2 = prompt('enter name of subject: ')
var sbj3 = prompt('enter name of subject: ')
var totalMarks = 100;
var obt1 = +prompt('enter marks: ')
var obt2 = +prompt('enter marks: ')
var obt3 = +prompt('enter marks: ')
var res1 = (obt1/totalMarks) * 100
var res2 = (obt2/totalMarks) * 100
var res3 = (obt3/totalMarks) * 100
var obtainedMarks = obt1 + obt2 + obt3
var totalPercentage = (res1 + res2 + res3)/3
document.write(`<table>
<tr>
<th>Subject</th>
<th>Total Marks</th>
<th>Obtained Marks</th>
<th>Percentage </th>
</tr>
<tr>
<td>${sbj1}</td>
<td>${totalMarks}</td>
<td>${obt1}</td>
<td>${res1}%</td>
</tr>
<tr>
<td>${sbj2}</td>
<td>${totalMarks}</td>
<td>${obt2}</td>
<td>${res2}%</td>
</tr>
<tr>
<td>${sbj3}</td>
<td>${totalMarks}</td>
<td>${obt3}</td>
<td>${res3}%</td>
</tr>
<tr>
<th colspan="2">300</th>
<th>${obtainedMarks}</th>
<th>${totalPercentage}%</th>
</tr>
</table>`)