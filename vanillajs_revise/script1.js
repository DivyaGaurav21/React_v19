// ------------------------------------------------//
//---- Values and Variables-----//
// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // Variable name conventions
// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);


// ------------------------------------------------//
//------------Data Types--------------//
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);
// console.log(typeof null);

// ---------------------------------------------------//
//---let, const and var-------//
// let age = 30;
// age = 31;
// console.log(age);

// const birthYear = 1991;
// // birthYear = 1990;
// // const job;

// var job = 'programmer';
// job = 'teacher'

// lastName = 'Schmedtmann';
// console.log(lastName);

// ---------------------------------------------------//

//---- Basic Operators-------//
// Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// // Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// // Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(isFullAge)
// console.log(now - 1991 > now - 2018);

//----------------------------------------------------//

//------Operator Precedence--------//
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// ----------------------------------------------------//

//------Strings and Template Literals---------//
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String 
// multiple
// lines`);


// ------------------------------------------------------//
// --Taking Decisions: if / else Statements--//
// const age = 15;

// if (age >= 18) {
//   console.log('Sarah can start driving license 🚗');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// ------------------------------------------------------//
//---Type Conversion and Coercion---//

// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);

// ---------------------------------------------------//

// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean('Jonas'));
// console.log(Boolean(null));
// console.log(Boolean({}));


// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log('You should get a job!');
// }

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }


// ----------------------------------------------//
// Equality Operators: == vs. ===
// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');

// if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) { // 22 === 23 -> FALSE
//   console.log('Cool! 23 is an amzaing number!')
// } else if (favourite === 7) {
//   console.log('7 is also a cool number')
// } else if (favourite === 9) {
//   console.log('9 is also a cool number')
// } else {
//   console.log('Number is not 23 or 7 or 9')
// }

// if (favourite !== 23) console.log('Why not 23?');


// ---------------------------------------------------//
//--Logical Operators--//
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// ----------------------------------------------------//

//----The switch Statement-----//
// const day = 'friday';

// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//   console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('Write code examples');
// } else if (day === 'friday') {
//   console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekend :D');
// } else {
//   console.log('Not a valid day!');
// }

// --------------------------------------------------//
//--- Statements and Expressions--//
// 3 + 4
// 1991
// true && false && !false

// if (23 > 10) {
//   const str = '23 is bigger';
//   console.log(str)
// }

// const me = 'Jonas';
// console.log(`I'm ${2037 - 1991} years old ${me}`);

// -----------------------------------------------------//

//--The Conditional (Ternary) Operator--//

// const age = 11;
// let drink;
// if(age >= 18){
//     drink = 'wine';
// }else{
//     drink = 'water'
// }

// console.log(drink);

// --------

// const age = 3;
// const drink = age >= 18 ? 'wine' : 'water' ; 
// console.log(drink);

// ---------
// const age = 14;
// console.log(`I Like to drink ${age>=18 ? 'wine' : 'water'} :))`)

// ------------------------------------------------//
//----Coding Challenge------//

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/


// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);



// ----------------------------------------------------//
//----STRICT MODE----//

// 'use strict'

// let hasDrivingLicense = false;
// const passTest = true;

// if(passTest) hasDrivingLicense = true;

// if(hasDrivingLicense) console.log('I can Drive :)');

// ----
// function logger(a ,v){
//     console.log('my name is Divya Gaurav');
// }
// logger(1, 2 , 5);

// ------------------------------------------------------//

// --Function declarartion and Function Expression -----//

// function calAge(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calAge(1991);

// const calAge2 = function (birthYear){
//     return 2037 - birthYear;
// }
// const age2 = calAge2(1992);
// console.log(age1 , age2);

//-------------------------------------------------- //
// // -------Arrow Function ------//
// const yearsUntilRetirement = (birthYear , firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`
// }
// console.log(yearsUntilRetirement(1991 , 'jonas'));
// console.log(yearsUntilRetirement(1987 , 'bob'));


// ------------------------------------------------- //

// ----function call inside function------ //
// const cutPieces = function (fruit) {
//     return fruit * 4;
// };

// const fruitProcessor = function (apples , oranges) {
//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `juice with ${applePieces} pieces of apple 
//     and ${orangePieces} pieces of orange.`
//     return juice;
// };

// console.log(fruitProcessor(2 , 3));
// -------------------------------------------------//

// let a ;
// let c;
// if(''){
//     console.log('true');
// }else{
//      c = confirm('all ohk')
// }
// console.log(c)


// console.log(typeof(typeof(typeof(100))))

// console.log(typeof(undefined))
// console.log(typeof(null))

// --------------------------------------------------//

// console.log(Math.PI);
// console.log(Math.ceil(4.9));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.floor(4.2));
// console.log(Math.trunc(4.9));
// console.log(Math.trunc(4.2));
// console.log(Math.pow(4.9, 5));
// console.log(Math.sqrt(4.2));
// console.log(Math.max(4.9 ,6 , 4, 55));
// console.log(Math.min(3.9 ,6 , 4, 55));
// console.log(Math.random()*10)
// console.log(Math.round(4.8))
// console.log(Math.round(4.2)) 

// -------------------------------------------------//

// const person = {fname:"John", lname:"Doe", age:25 , gender : 'male'};
// let text = "";
// for (let i in person) {
//   text += person[i] + " ";
// }
// console.log(text);

// ------------------------------------------------//

// Variables defined with let can not be redeclared.

// Variables defined with let must be declared before use.

// Variables defined with let have block scope

// ---------------------------------------------//

// function add(){
//     console.log(arguments);
// }
// add(5 , 7 , 8);

// --------------------------------------------- //

// function add(){
//     let sum = 0;
//     for(let i=0; i<arguments.length; i++){
//        sum += arguments[i];
//     }
//     return sum;
// }
// let finalSum = add(1,2,4);
// console.log(finalSum);

// -----------------------------------------------//

// function add(num1 , num2 , num3){
//     document.write(num1 + num2 + num3);
//     console.log(arguments.length);
// }
// add(4, 5 , 6);

// -----------------------------------------------//


// in case of function expression hoisting is not allowed

// show();
// const show = function (){
//     console.log('function expression')
// }

// ------------------------------------------------//


// for each iteration [JavaScript Array forEach()]
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.

// let book = ['math' , 'science' , 'physics' , 'bio'];
// book.forEach(myFunction);

// function myFunction(value){
//     console.log(value);
// }

// ---------->

// let sum = 0;
// const numbers = [65, 44, 12, 2];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
// }
// console.log(sum);

// ------>
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }
// console.log(numbers);

// ------------------------------------------------------
// jS ARRAY 

// An array is a special variable, which can hold more than one value:
// const cars = ["Saab", "Volvo", "BMW"];
// Arrays are Objects
// Arrays are a special type of objects.
//  The typeof operator in JavaScript returns "object" for arrays.
// Note :-
// The Difference Between Arrays and Objects
// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.


/*

let book = ['math' , 'physics' , 'bio' , 'chem'];
//-----ADD-----//
// push('hindi)
book.push('hindi'); // ye sabse last me element add karega
//push or unshift operation array length return karta hai
console.log(book)
//unshift('hindi)
book.unshift('hindi');
console.log(book) // ye sabse pehle element ko add karega
//---DELETE---//
// pop()
book.pop();
console.log(book) // ye sabse last element ko delete karega
//shift()
book.shift();
console.log(book) //ye sabse pehle element ko delete karega
// ------------------
//INDEXOF index return karta hai
console.log(book.indexOf('physics'));
console.log(book.indexOf('chem'));
// ----------
//splice(array index , deletion count, element to be inserted)
// The slice() method slices out a piece of an array.
//alag se padhe

//isArray() to check given variable value is array or not by
// Array.isArray(arrName):
let book1 = 'math';
console.log(Array.isArray(book1));
let book2 = ['math' , 'physics'];
console.log(Array.isArray(book2));
// -------------
//toString()
// The JavaScript method toString() converts 
// an array to a string of (comma separated) array values.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
 console.log(fruits.toString())

//join()
// The join() method also joins all array elements into a string.
// It behaves just like toString(), 
// but in addition you can specify the separator:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
 console.log(fruits.join(" * "))

//concat();
// Merging (Concatenating) Arrays
// The concat() method creates a new array
//  by merging (concatenating) existing arrays:
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
// ---------
// Example (Merging Three Arrays)
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren2 = arr1.concat(arr2, arr3);
console.log(myChildren2)

// ------------
// INCLUDE methode give boolean value if array contains that element
console.log(book.includes('physics'));
console.log(book.includes('Bob'));
console.log(book.includes(23));

if (book.includes('math')) {
  console.log('You have a friend called Steven');
}

*/
// @@@@@@@@@@@@@@@@@ 

// -------------------------------------------------------//

//OBJECT

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYeah: 1993,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,
//   calcAge: function (birthYeah) {
//     return 2037 - this.birthYeah;
//   }
// }
// console.log(jonas.calcAge())

// ---------------
// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// -----------

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// -----------------------------------------------------//
// --------continue and break------
// Example of 'continue' statement
// console.log('Example of continue:');
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue; // Skips the current iteration when i is 3
//   }
//   console.log(i);// Output: 1, 2, 4, 5
// }

// console.log('\n');

// // Example of 'break' statement
// console.log('Example of break:');
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     break; // Terminates the loop when i is 3
//   }
//   console.log(i);// Output: 1, 2
// }

// ------------

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];


// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);


// --------------------------------------------------------//

//-------JS STRING ----------
// All string methods return a new value.
// They do not change the original variable.

//str.slice() in String
// let text = "Apple, Banana, Kiwi"; // space and comma dono consider hoga
// let part = text.slice(7);
// console.log(part);
// console.log(text);
// // If a parameter is negative,position is counted from the end of the string:
// let part2 = text.slice(-7);
// console.log(part2);

//str.substring()
// let str = "AppleBananaKiwi";
// let part = str.substring(7, 13);// ei is exclusive
// console.log(part);

//str.substr();
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
// let str = "Apple, Banana ,Kiwi";
// let part = str.substr(7, 6);
// console.log(part);

//str.replace()
// The replace() method replaces a specified value 
// with another value in a string:
// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText);

//str.toLowerCase()
//str.toUpperCase()
//str.concat()
// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// console.log(text3);

// str.trim() && trimStart() && trimEnd()
// The trim() method removes whitespace from both sides of a string:
// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text2);


// str.split()
// converting a String to an Array
// If you want to work with a string as an array, you can convert it to an array.
// let text = "a,b,c,d,e,f";
// const myArray = text.split(","); 
// console.log(myArray)
// ------------->
// let text = "my name is divya gaurav";
// const myArray = text.split(" "); 
// console.log(myArray)

//str.indexOf();
// The indexOf() method returns the index (position) the first occurrence of a string in a string:
// let text = "Please locate where locate occurs!";
// let index = text.indexOf("locate");
// console.log(index);
// -------->
//str.lastIndexOf()
// let text = "Please locate where locate occurs!";
// let index = text.lastIndexOf("locate");
// console.log(index);
// NOTE :- Both indexOf(), and lastIndexOf() return -1 if the text is not found: 

// Str.includes()
// The includes() method returns true if a string contains a specified value.
// let text = "Hello world, welcome to the universe.";
// let res = text.includes("world");
// console.log(res);

// ----------------------------------- 
// POPUP Message 
// alert()
// prompt()
// confirm()

// alert('dfdf');

// let respond = confirm('are you fine ?')
// console.log(respond);

// let age = prompt('Enter Your age');
// console.log(age);

// -------------------------------------
// js is dynamic type language this means same variable can holds
// diffrent datatype(number , string , array , object)

// NOTE :- JS evaluates expression from Left To Right 
// let x  = 16+4+"volvo";
// let y = "volvo" + 16+4;
// console.log(x)
// console.log(y)

// ----------------------------------- 
// FUNCTION 
// function sum(a , b , c){
//     console.log(a, b, c)
//     return a+b+c;
// }
// console.log(sum(3, 5)) //5+undefined = NaN

// ---->
// let nam = 'global';
// function scpoeDemo(){
//    nam = "divya"
//     console.log(nam);
// }
// scpoeDemo()
// console.log(nam)
// -------->
// let nam = 'global';
// function scpoeDemo(){
//   let nam = "divya"
//     console.log(nam);
// }
// scpoeDemo()
// console.log(nam)

// -------->
// function scope 
// function outer(){
//     var outerVar = 10;
//     function inner(){
//         console.log(outerVar)
//     }
//     inner()
// }
// outer();
// inner()

// -------->

// console.log(factorial(5))
// console.log(factorial)
// var factorial = function (n){
//     var ans = 1;
//     for(var i=1; i<=n; i++){
//         ans*=i;
//     }
//     return ans;
// }
// Can arrow function be hoisted?
// Arrow functions are not hoisted as they are also function expressions where the function is assigned as a value to the variable.

// -------->
// function call Inside function 

// let combineStr = '';
// function a(){
//     combineStr = 'inside a'
//     function b(){
//         combineStr = combineStr + ' inside b'
//     }
//     b()
// }
// a();
// console.log(combineStr);

// --------->

// var nam = 'global';
// function outer(){
//     var nam = 'outer';
//     var outerVar = 10;
//     function inner(){
//         var nam = 'inner'
//         var innerVar = 100;
//         console.log(nam , outerVar);
//     }
//     inner();
//     console.log(nam)
// }
// outer();
// console.log(nam);

// --------------> 
// const arr = [2,3,4,5]
// arr.splice(11, 1 , 999)
// console.log(arr);
// --------->
// var color = ['red', 'blue', 'orange' , 'violet'];
// var removed = color.splice(2);
// console.log(removed)
// console.log(color)

// ----------------------------------------------
// delete keyword used in object 
// var student = {
//     'name' : 'dg',
//     'age' : 25
// }
// console.log(student)
// delete student.age;
// console.log(student)
// --------------------------------------------- 
// setInterval and setTimeout

// var abc = setInterval(counting , 2000);
// let count = 0;
// function counting(){
//     console.log(count++);
//     if(count == 5){
//         clearInterval(abc)
//     }
// }
// ------------------------------------
//CallBack Function
// --------->

// function getData(callback) {
//     setTimeout(() => {
//         let data = {
//             name: 'divya',
//             age: 25
//         };
//         callback(data);
//     }, 1000);
// }

// const call = (data) =>{
//     console.log(data)
// }

// console.log('non blocking ')
//  getData(call)

// ----------->

// function greeting(name, callback) {
//     console.log('Hello ' + name);
//     callback();
//   }
  
//   function sayGoodbye() {
//     console.log('Goodbye!');
//   }
  
//   greeting('John', sayGoodbye);
  
// ----------------



