// 1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.
var a= 3;
var b=5;
var c=a+b;
document.write("Sum of " + a + " and " + b +" is " + c)

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
var a= 3;
var b=5;
var c=a-b;
document.write("Sum of " + a + " and " + b +" is " + c)

var a= 3;
var b=5;
var c=a*b;
document.write("Sum of " + a + " and " + b +" is " + c)

var a= 3;
var b=5;
var c=a/b;
document.write("Sum of " + a + " and " + b +" is " + c)

var a= 3;
var b=5;
var c=a % b;
document.write("Sum of " + a + " and " + b +" is " + c)

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value 
// by 3. 
// l. Output : “The remainder is : 0”.

var a=5;
document.write(a +"<br>");
var b = ++a
document.write(b +"<br>");
var c=b+7
document.write(c  + "<br>");
var d=--c
document.write(d  + "<br>");
var e=d%3
document.write(e  + "<br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store
// ticket price in a variable & calculate the cost of buying 5 
// tickets
// to a movie. Example output:
var ticketPrice=600;
var amount = 5;
document.write("the totel cost to buy " + amount +" ticket to a movie is " + ticketPrice*amount+ " PRK" )

// 5. Write a script to display multiplication table of any 
// number in your browser. E.g

let n = prompt("enter the number")
for (let i = 1; i <= 10; ++i)
    document.write(n + " * " + i + " = " + n * i )+"<br>";

// 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + " C is " + fahrenheit + " F" +"<br>") ;

var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5/9;
document.write(fahrenheit2 + " F is " + celsius2 + " C")

// 7. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
var priceItem_1 = 650;
var quantityItem_1 = 3;
var totalItem_1 = priceItem_1*quantityItem_1;
var priceItem_2 = 100;
var quantityItem_2 = 7;
var totalItem_2 = priceItem_2*quantityItem_2;
var shippingCharges = 100;
var totalPrice = totalItem_1 + totalItem_2 + shippingCharges;
document.write("price of item1 is " + priceItem_1 +"<br>");
document.write("quantity of item1 is " + quantityItem_1 +"<br>");
document.write("price of item2 is " + priceItem_2 +"<br>");
document.write("quantity of item2 is " + quantityItem_2 +"<br>");
document.write("shipping charges " + shippingCharges +"<br>");
document.write("total cost of the order is " + totalPrice)

// 8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser
var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks/totalMarks) * 100;
document.write("total marks: " + totalMarks +"<br>");
document.write("obtained marks: " + obtainedMarks +"<br>");
document.write("percentage: " + percentage);

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)
var prkToDollar = 282.75;
var dollar = 5;
document.write("Total Currency rate is: " + prkToDollar* dollar);

// 10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
var allOperations= (2+(5*10))/2;
document.write("the answer is " + allOperations)

// 11. The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”
var currenyYear= prompt("enter year");
var birthYear= prompt("enter year");
var age = currenyYear - birthYear;
document.write("Current Year: " + currenyYear +"<br>");
document.write("Birth Year: " + birthYear +"<br>");
document.write("Age: " + age);

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var r=20;
var circumfarance = 2*3.14*r;
var area=2*(r*r)*3.14;
document.write("Radius of a circle: " + r +"<br>");
document.write("The circumfarance is: " + circumfarance +"<br>");
document.write("The area of a circle is: " + area);

// 13.

var favouriteSnack = 'chocolate chip'
var currentAge = 15
var estimatedage = 65
var amountOfsnacks = 3
document.write('you will need 150' + favouriteSnack + 'to last until the ripe old age of' + estimatedage);