//================================BASIC PROGRAMME=======================================//
// [1]
// -------------------------------------------------------------------------------------//
//------------Data Types-------------------//
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

//-----------let, const and var-------------//
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

// // Math operators
// const now = 2037;
// console.log(ageJonas, ageSarah);

// const ageJonas = 32;
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 5);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// ------------------------------------------//
// Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// const now = 2037;
// const ageJonas = now - 1991; //46
// const ageSarah = now - 2018; //19
// // Comparison operators
// // console.log(ageJonas > ageSarah); // >, <, >=, <=
// // console.log(ageSarah >= 18);
// const isFullAge = ageSarah <= 18;
// console.log(isFullAge)
// console.log(now - 1991 > now - 2018);

//------Operator Precedence-----------------//
// const now = 2037;
// const ageJonas = now - 1991; //46
// const ageSarah = now - 2018; //19
// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

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

// console.log('String with \n\ multiple \n\ lines');

// console.log(`String
// multiple
// lines`);

// --Taking Decisions: if / else Statements--//

// const age = 25;
// if (age >= 18) {
//   console.log(`Sarah can start driving license 🚗 ${age}`);
// } else {
//   const yearsLeft = 18 - age; // 3
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century; // undefined
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);
// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
//
// [2]
//--------------------------------------------------------------------------------------//
//--------Type Conversion and Coercion-----------//
// type conversion
// let inputYear = '1991';
// console.log(Number(inputYear), inputYear); // 1991  '1991'
// console.log(typeof inputYear) // string
// console.log(Number(inputYear) + 18); //2007
// inputYear = Number(inputYear);
// console.log(inputYear + 7)//
// console.log(Number('1440'));
// console.log(Number('Jonas'));
// console.log(typeof NaN);
// console.log(String(23), 23);

// type coercion
// console.log('I am ' + 23 + ' years old');
// let num = '23' + '10' - '3'; // '2310' - '3'
// console.log(typeof (num));
// console.log(num);
// console.log('23' / '2');
// let n = '1' + 1; // '11'
// n = n - 1; // 11 - 1
// console.log(n);

// ------------------------------------------------//

// Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean('Jonas'));
// console.log(Boolean(null));
// console.log(Boolean({}));

// let money = null;
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

// console.log(undefined == null)

// let obj = {}; // @2037[arr]/34
// let obj2 = obj; // obj2 = @2037[arr]/34
// console.log(obj == obj2);


// window  // alert() , prompt() , warn() ,

// let favourite = Number(prompt("What's your favourite number?"));
// // console.log(favourite);
// // console.log(typeof favourite);

// if (favourite === 23) { // 22 === 23 -> FALSE
//   console.log('Cool! 23 is an amzaing number!')
// } else if (favourite === 7) {
//   console.log('7 is also a cool number')
// } else if (favourite === 9) {
//   console.log('9 is also a cool number')
// } else {
//   console.log('Number is not 23 or 7 or 9')
// }

// ------------------------------------------------//
//--Logical Operators--//

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B
// console.log(hasDriversLicense && hasGoodVision); //false
// console.log(hasDriversLicense || hasGoodVision);//true
// console.log(!hasDriversLicense); //false
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
// ---------------------------------------------//
//----The switch Statement-----//
// const day = 'landay';
// // const day = 'wednesday';
// switch (day) { // wednesday
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
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }
// ----------------------------------------------//

// const day = 'wednesday';
// // const day = 'sunday';
// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//   console.log('Prepare theory videos');
// } else if (day === 'wednesday' && day === 'thursday') {
//   console.log('Write code examples');
// } else if (day === 'friday') {
//   console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekend :D');
// } else {
//   console.log('Not a valid day!');
// }

// [3]
// --------------------------------------------------------------------------------------//
//------The Conditional (Ternary) Operator-------//
// const age = 11;
// let drink;
// if (age >= 18) {
//   drink = 'wine';
// } else {
//   drink = 'water'
// }
// console.log(drink);

// const age = 14;
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);
// // const age = 14;
// console.log(`I Like to drink ${age >= 18 ? 'wine' : 'water'} :))`);

// ------------------------------------------------//
//strict mode
// 'use strict'

// let hasDrivingLicense = false;
// const passTest = true;
// if (passTest) hasDrivingLicense = true;
// if (hasDrivingLicense) console.log('I can Drive :)');

// ----Arguments Object---------//
// function logger(...args) {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += args[i];
//   }
//   console.log(sum); // 8
//   console.log('my name is Divya Gaurav');
// }
// logger(1, 2, 5);

// console.log(nam);
// var nam = 'div'

// -------------------------------------------------//
//Function declarartion and Function Expression -----//
// function calAge(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calAge(1991);
// console.log(age1);

// const calAge2 = (birthYear) => {
//   return 2037 - birthYear;
// }
// const age2 = calAge2(1992);
// console.log(age2);
//-------------Arrow Function---------------------//
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear; //46
//   const retirement = 65 - age;  //19
//   return `${firstName} retires in ${retirement} years`
// }
// let result = yearsUntilRetirement(1991, 'jonas');
// console.log(result)
// console.log(yearsUntilRetirement(1987, 'bob'));

// const cutPieces = (fruit) => {
//   return fruit * 4;
// };
// const fruitProcessor = (apples, oranges) => { //2 , 3
//   const applePieces = cutPieces(apples);  // 8
//   const orangePieces = cutPieces(oranges); // 12
//   const juice = `juice with ${applePieces} pieces of apple
//     and ${orangePieces} pieces of orange.`
//   return juice;
// };
// console.log(fruitProcessor(2, 3));
// ------------------------------------------------//
// let a ;
// let c;
// if ('') {
//   console.log('true');
// } else {
//   c = confirm('all ohk')
// }
// console.log(c)

// console.log(typeof (typeof (typeof (100))))
// console.log(typeof (undefined))
// console.log(typeof (null))
// ------------------------------------------------//

// console.log(Math.PI);
// console.log(Math.ceil(-7.9));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.floor(-4.2));
//trunc gives
// console.log(Math.trunc(4.9));
// console.log(Math.trunc(4.2));

// console.log(Math.pow(2, 5));
// console.log(Math.sqrt(16));
// console.log(Math.max(4.9 ,6 , 4, 55));
// console.log(Math.min(3.9, 6, 4, 55));
// console.log(Math.trunc(Math.random() * 10))
// console.log(Math.round(4.9));
// console.log(Math.round(-4.9));

//-----------for in loop for object----------------//
// const person = {
//   fname: "John",
//   lname: "Doe",
//   age: 25,
//   gender: 'male'
// };
// for (let i in person) {
//   console.log(person[i]);
// }
// const arr = [1, 2, 3, 4, 5];
// console.log(arr["3"])

// let text = "";
// for (let i in person) {
//   text += person[i] + " ";
// }
// console.log(text);
// ------------------------------------------------//
// Variables defined with let can not be redeclared.
// Variables defined with let must be declared before use.
// Variables defined with let have block scope

// function add() {
//   console.log(arguments.length);
// }
// add(5, 7, 8);

// function add() { //parameter // [1 ,2 ,4 ,5]
//   console.log(arguments[arguments.length - 1]); //5
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum; // returns 12
// }
// let finalSum = add(1, 2, 4, 5);
// console.log(finalSum);

// -----------------------------------------------//
// function add(num1, num2, num3) {
//   // 4 ,5 ,6 ,7 ,8
//   document.write(num1 + num2 + num3); //15
//   console.log(arguments.length);//5
// }
// add(4, 5, 6, 7, 8);

// in case of function expression hoisting is not allowed

// show();
// const show = function () {
//   console.log('function expression not hoisting')
// }
// [4]
// --------------------------------------------------------------------------------------//
// for each iteration [JavaScript Array forEach()]
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.

// let book = ['math', 'science', 'physics', 'bio'];

// map is used for transforming elements and creating a new array with the transformed values.
// forEach is used for iterating through elements and performing actions on them without creating a new array.
// Choose the method that aligns with your intended use case. If you want to create a new array with transformed values, use map.If you want to perform actions on each element without creating a new array, use forEach.

// let originalArr = [1, 2, 3, 4];
// originalArr.forEach(
//   (value) => console.log(value + 1)
// );
// console.log(originalArr);

// let numbers = [1, 2, 3, 4, 5];
// let doubledNumbers = numbers.map(number => number * 3)
// console.log(doubledNumbers);
// console.log(numbers);

// --------------------------------------------//

// const numbers = [65, 44, 12, 2];
// let sum = 0;
// numbers.forEach(myFunction); // equal to for loop
// function myFunction(item) {
//   sum += item;
// }
// console.log(sum);
// ------>
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// function myFunction(item, index, arr) { // 44 , 1 , numbers
//   arr[index] = item * 10; // arr[1] = 440
// }
// console.log(numbers);

// ----------------------------------------------//
// jS ARRAY
// An array is a special variable, which can hold more than one value;
// const cars = ["Saab", "Volvo", "BMW"];
// console.log(typeof cars)
// Arrays are Objects
// Arrays are a special type of objects.
//  The typeof operator in JavaScript returns "object" for arrays.
// Note :-
// The Difference Between Arrays and Objects
// In JavaScript, arrays use numbered indexes.
// In JavaScript, objects use named indexes.

// let book = ['math', 'physics', 'bio', 'chem'];
//-----ADD-----//
// push('hindi)
// let len = book.push('history'); // ye sabse last me element add karega
// console.log(book);
//push or unshift operation array length return karta hai
// console.log(len);
// console.log(book)
//unshift(hindi)
// const len = book.unshift('hindi');
// console.log(len) //5
// console.log(book) // ye sabse pehle element ko add karega

//---DELETE---//
// pop()
// const delElement = book.pop();
// console.log(delElement);
// console.log(book) // ye sabse last element ko delete karega
//shift()
// const delEle = book.shift();
// console.log(delEle);
// console.log(book) //ye sabse pehle element ko delete karega
// -------------//

//INDEXOF index return karta hai
// let book = ['math', 'physics', 'bio', 'chem'];
// console.log(book.indexOf('physics'));
// console.log(book.indexOf('chem'));
// // ------------//
//isArray() to check given variable value is array or not by
// Array.isArray(arrName):
// let book1 = 'math';
// console.log(Array.isArray(book1));
// let book2 = ['math', 'physics'];
// console.log(Array.isArray(book2));
// -------------//
//toString()  // string return
// The JavaScript method toString() converts
// an array to a string of (comma separated) array values.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// console.log(fruits.toString());
//--------------//
//join()  // string return
// The join() method also joins all array elements into a string.
// It behaves just like toString(),
// but in addition you can specify the separator:

// const fruit = ["Banana", "Orange", "Apple", "Mango"];
// const modFruits = fruit.join(" * ");
// console.log(typeof modFruits)
// console.log(modFruits);

// --------------//
//concat();
// Merging (Concatenating) Arrays
// The concat() method creates a new array
//  by merging (concatenating) existing arrays:
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);
// -----------//
// Example (Merging Three Arrays)
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren2 = arr1.concat(arr2, arr3 );
// console.log(myChildren2)
// ------------//
// let book = ['math', 'physics', 'bio', 'chem'];
// INCLUDE methode give boolean value if array contains that element
// console.log(book.includes('phy'));
// console.log(book.includes('Bob'));
// console.log(book.includes(23));
// if (book.includes('math')) {
//   console.log('You have a friend called Steven');
// }
// [5]
// ---------------------------------------------------------------------------------------//
//----------array slice and splice method------------------//
// Array.slice();doesnot modify original array
// const originalArray = [1, 2, 3, 4, 5];
// // Extract elements from index 1 to index 3 (exclusive)
// const slicedArray = originalArray.slice(1, 3);
// console.log(slicedArray); // Output: [2, 3]
// // The original array remains unchanged
// console.log(originalArray); // Output: [1, 2, 3, 4, 5]
// ----------//
// const fruits = ['apple', 'orange', 'banana', 'grape', 'kiwi'];
// // Extract elements from index 1 to the end of the array
// const extractedFruits1 = fruits.slice(1);
// console.log(extractedFruits1); // Output: ['orange', 'banana', 'grape', 'kiwi']
// // Extract the last two elements
// const extractedFruits2 = fruits.slice(-2);
// console.log(extractedFruits2); // Output: ['grape', 'kiwi']
// // Extract elements from index 2 to index 4 (exclusive)
// const extractedFruits3 = fruits.slice(2, 4);
// console.log(extractedFruits3); // Output: ['banana', 'grape']
// -----------------------------------//
// array.splice(start, deleteCount, item1, item2, ...);
// const fruits = ['apple', 'orange', 'banana', 'grape', 'kiwi'];
// // Example 1: Removing elements
// const removedElements = fruits.splice(1, 2);
// console.log(removedElements);
// console.log(fruits);
// // Example 2: Replacing elements
// fruits.splice(1, 1, 'mango', 'papaya');
// console.log(fruits);
// // Example 3: Inserting elements without removing any
// fruits.splice(2, 0, 'cherry', 'plum');
// console.log(fruits);
//  // Output: ['apple', 'mango', 'cherry', 'plum', 'papaya', 'grape', 'kiwi']
// // Example 4: Removing elements and inserting new ones simultaneously
// const replacedElements = fruits.splice(1, 3, 'pear');
// console.log(replacedElements); // Output: ['mango', 'cherry', 'plum']
// console.log(fruits); // Output: ['apple', 'pear', 'papaya', 'grape', 'kiwi']

// -----------------------------------------------//
//OBJECT
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYeah: 1993,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,
//   calcAge: function () {
//     return 2037 - this.birthYeah;
//   }
// }
// console.log(jonas.calcAge())
// -----------------------------------------//

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
// ----------------------------------------//

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// ---------continue and break------------//
// Example of 'continue' statement
// console.log('Example of continue:');
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue; // Skips the current iteration when i is 3
//   }
//   console.log(i);// Output: 1, 2, 4, 5
// }
// // -----------//
// // Example of 'break' statement
// console.log('Example of break:');
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     break; // Terminates the loop when i is 3
//   }
//   console.log(i);// Output: 1, 2
// }
// -----------//
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, true, 5];
// const calcTempAmplitude = function (temps) { // temperatures
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
// -------------//

// Looping Arrays, Breaking and Continuing
// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ];
// console.log(jonas[0])
// console.log(jonas[1])
// console.log(jonas[4])
// console.log(jonas[5])
// const types = [];
// for (let i = 0; i < jonas.length; i++) {
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }
// console.log(types);
// ----------------//
// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);
// [6]
// ----------------------------------ES6/ES5---------------------------------------------//
//-------let/const---------//
// ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);
// ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);

// ES5
// function driversLicence5(passedTest) { // true
//   if (passedTest) {
//     console.log(firstName); // undefined
//     var firstName = 'John';
//     var yearOfBirth = 1990;
//   }
//   console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
// }
// driversLicence5(true);
// // ES6
// function driversLicence6(passedTest) {
//   // console.log(firstName);
//   let firstName;
//   const yearOfBirth = 1990;
//   if (passedTest) {
//     firstName = 'John';
//   }
//   console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
// }
// driversLicence6(true);

// var i = 23;
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);
// let i = 23;
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);

// {
//   const a = 1;
//   let b = 2;
//   var c = 3;
// }
// console.log(a + b);
// console.log(c);
// ES5
// (function () {
//   var c = 3;
// })();
// console.log(c);

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;
// function calcAge(year) {
//     return 2016 - year;
// }
// // // ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in '
//  + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');
// // ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}.
//  Today, he is ${calcAge(yearOfBirth)} years old.`);
// let firstName = 'John';
// let lastName = 'Smith';
// const n = `${firstName} ${lastName}`; // john Smith
// console.log(n.startsWith('J'));
// console.log(n.endsWith('th'));
// console.log(n.includes('oh'));
// console.log(`${firstName} `.repeat(5));

// -----------ARROW FUNCTION----------//

// const years = [1990, 1965, 1982, 1937];
// // ES5
// var ages5 = years.map(function (el) {
//   return 2016 - el;
// });
// console.log(ages5);
// // ES6
// let ages6 = years.map(el => 2016 - el);
// console.log(ages6);
// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
// console.log(ages6);

// ages6 = years.map((el, index) => {
//   const now = new Date().getFullYear();
//   const age = now - el;
//   return `Age element ${index + 1}: ${age}.`
// });
// console.log(ages6);
// --------------------------------------//
// ES5
// var box5 = {
//   color: 'green',
//   position: 1,
//   clickMe: function () {
//     var str = 'This is box number ';
//     alert(str);
//   }
// }
// box5.clickMe();

// ES6
// const box6 = {
//   color: 'green',
//   position: 1,
//   clickMe: function () {
//     var str = 'This is box number ' + this.position
//       + ' and it is ' + this.color;
//     alert(str);
//   }
// }
// box6.clickMe();
// ------------------------------------------//
// OF Loop {chalega iterable object ke liye like: Array , object , string , map , set}
// const myArray = [10, 20, 30];
// for (const element of myArray) {
//   console.log(element); // Outputs 10, 20, 30
// }
// const message = "Hello";
// for (const char of message) {
//   console.log(char);
// }

// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York',
// };

// for (const key in person) {
//   console.log(key + ': ' + person[key]);
// }
// [8]
// ----------------------------------------------------------------------------------------//

// var ages = [12, 25, 8, 21, 14, 25, 32];
// // ES5
// var full = ages.map(function (cur) {
//   return cur >= 18;
// });
// console.log(ages);
// console.log(ages.indexOf(25));
// console.log(ages.lastIndexOf(25));
// //ES6
// console.log(ages.findIndex(cur => cur >= 18)); // index
// console.log(ages.find(cur => cur >= 18)); // value
// --------------------------------------//
// function addFourAges(a, b, c, d) {
//   return a + b + c + d;
// }
// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);
// //ES6
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];
// const bigFamily = [...familySmith, 'Lily', ...familyMiller];
// console.log(bigFamily);
// ---------------------------------------//
// function isFullAge6(limit, ...years) {
//   years.forEach(cur => console.log((2016 - cur) >= limit));
// }

// isFullAge6(16, 1990, 1999, 1965, 2016, 1987);
// -----------------------------------------//
// ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//     lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//     nationality === undefined ? nationality = 'american' : nationality = nationality;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }
//ES6
// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality;
// }
// var john = new SmithPerson('John', 1990);
// console.log(john);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
// console.log(emily);

//-----Destructuring--------//
// ES5
// var john = ['John', 26];
// var name = john[0];
// var age = john[1];
// ES6
// const [nam, age] = ['John', 26];
// console.log(nam);
// console.log(age);

// const obj = {
//   firstName: 'John',
//   lastName: 'Smith'
// };
// const {firstName ,  lastName } = obj;
// console.log(firstName);
// console.log(lastName)

// const { firstName: a, lastName: b } = obj;
// console.log(a);
// console.log(b);

// function calcAgeRetirement(year) {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age];
// }
// const [age2, retirement] = calcAgeRetirement(1990);
// console.log(age2);
// console.log(retirement);

//------------- Maps----------------//
// const question = new Map();
// question.set('question', 'What is the official name of the latest major JavaScript version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer :D');
// question.set(false, 'Wrong, please try again!');

// console.log(question.get(true));
// console.log(question.get(4));
// console.log(question.size);

// if (question.has(4)) {
//   question.delete(4);
//   console.log('Answer 4 is here');
// }
// console.log(question.size);
// question.clear();
// console.log(question.size);
// [9]
// ----------------------------------------------------------------------------------------//
//ES5
// var Person5 = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };
// Person5.prototype.calculateAge = function() {
//   var age = new Date().getFullYear() - this.yearOfBirth;
//   console.log(age);
// };
//   var john5 = new Person5('John', 1990, 'teacher');
//   john5.calculateAge();
// //ES6
// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//   calculateAge() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   }
//   static greeting() {
//     console.log('Hey there!');
//   }
// }
// const john6 = new Person6('John', 1990, 'teacher');
// john6.calculateAge();
// Person6.greeting(); // Hey There
// -----------------------------------//

//ES6
// class Person {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//   calculateAge() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   }
// }
// class Athlete extends Person {
//   constructor(name, yearOfBirth, job, olympicGames, medals) {
//     super(name, yearOfBirth, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
//   }
//   wonMedal() {
//     this.medals++;
//     console.log(this.medals);
//   }
// }
// const johnAthlete = new Athlete('John', 1990, 'swimmer', 3, 10);
// johnAthlete.wonMedal();
// johnAthlete.calculateAge();
// ------------------------------------------//
// const classifyStreet = () => {
//   const classification = new Map();
//   classification.set(1, 'tiny');
//   classification.set(2, 'small');
//   classification.set(3, 'normal');
//   classification.set(4, 'big');
//   classification.set(5, 'huge');
//   console.log(classification.size);
// }
// classifyStreet();
// [10]
// --------------------------------------------------------------------------------------//

// //-------------- Closures------------------//
// const secureBooking = function () {
//   let passengerCount = 0; // 1  // 2 //3

//   return function () {
//     passengerCount++; // 1 //2 //3
//     console.log(`${passengerCount} passengers`);
//   };

// };
// const booker = secureBooking(); //
// booker();
// booker();
// booker();
// console.log(booker);
// -------------------------------------------//
// More Closure Examples1

// let f;  // undefined
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g();
// f();
// console.dir(f);
// h();
// f();
// console.dir(f);
// --------------------------------------------//
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`Will start boarding in ${wait} seconds`);
// };
// boardPassengers(180, 3);
// ------------------------------------------//
// 'use strict'
// Default Parameters
// const bookings = [];
// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//   const booking = { flightNum, numPassengers, price, };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);
// console.log(bookings);
// -------------------------------------------//

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('👋');
// };
// ['Jonas', 'Martha', 'Adam'].forEach(high5);
// --------------------------------------//

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('Hey');
// const greeterHey = function (name) {
//   console.log(` Hey ${name}`)
// }

// greeterHey('Jonas');
// greeterHey('Steven');
// greet('Hello')('Jonas');
// ------------------------------------//
// Immediately Invoked Function Expressions (IIFE)
// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();
// IIFE
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();
// console.log(isPrivate);

// (() => console.log('This will ALSO never run again'))();

//=====================-==============THE END=============================================//


