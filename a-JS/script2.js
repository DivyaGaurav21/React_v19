// [11]
//-------------------------------------------------------------------------------------//
//-------------------Arrow Fn---------------//
// const obj = {
//   name: 'John',
//   greet: function () {
//     setTimeout(() => {
//       console.log(`Hello, ${this.name}!`); // `this` refers to obj
//     }, 1000);
//   }
// };
// obj.greet(); // Output: Hello, John!
// // -------//
// const multiplyNumbers = (a, b) => a * b;
// console.log(multiplyNumbers(2, 3)); // Output: 6
// // -------//
// const addNumbers = (a, b) => {
//   return a + b;
// };
// console.log(addNumbers(2, 3)); // Output: 5

// ---------------------------------------//
// -----Spread Parameter------//
// . It provides a convenient way to copy or merge arrays, pass multiple
// arguments to functions, or create new arrays with existing elements.
//  The spread syntax uses the ellipsis (...) notation.

// const numbers = [1, 2, 3];
// const expandedNumbers = [...numbers, 4, 5];
// console.log(expandedNumbers); // Output: [1, 2, 3, 4, 5]
// // --------//
// const originalArray = [1, 2, 3];
// const copiedArray = [...originalArray];
// console.log(copiedArray); // Output: [1, 2, 3]
// // -------//
// function sum(a, b, c) {
//   return a + b + c;
// }
// const numbers = [1, 2, 3];
// const result = sum(...numbers);
// console.log(result); // Output: 6
// // -------//
// const person = {
//   name: 'John',
//   age: 30,
//   profession: 'Engineer'
// };
// // Update the age property
// const updatedPerson = {
//   ...person,
//   age: 31
// };
// console.log(updatedPerson);
// ----------------------------------//

//-------Rest Parameter--------------//
// The rest parameter is a feature in JavaScript that allows a
//  function to accept an indefinite number of arguments as an array

// function sum(...numbers) {
//   let total = 0;
//   for (let num of numbers) {
//     total += num;
//   }
//   return total;
// }
// console.log(sum(1, 2, 3));               // Output: 6
// console.log(sum(4, 5, 6, 7, 8));         // Output: 30
// console.log(sum(2, 4, 6, 8, 10, 12));    // Output: 42
// ------------//
// function concatenate(separator, ...strings) {
//   return strings.join(separator);
// }
// console.log(concatenate('-', 'a', 'b', 'c'));   // Output: 'a-b-c'
// console.log(concatenate(' ', 'Hello', 'World')); // Output: 'Hello World'

//--------Terniary operator----------//
// const age = 25;
// const isAdult = age >= 18 ? 'Adult' : 'Minor';
// console.log(isAdult); // Output: 'Adult'
// ---------
// function getDiscount(isMember) {
//     return isMember ? 0.2 : 0.1;
//   }
//   console.log(getDiscount(true));  // Output: 0.2
//   console.log(getDiscount(false)); // Output: 0.1
// ------------------------------------//
// conditional rendering with logical operator
// function checkPermissions(user) {
//   return user && user.isAdmin ? "Admin" : "Regular User";
// }
// // Usage
// const user = {
//   name: "John Doe",
//   isAdmin: true
// };
// console.log(checkPermissions(user)); // Output: "Admin"
// // -------
// console.log(true && 'some string');
// console.log(false && 'no string')
// ----------------------------------//
//---optional chaining--------//
// Optional chaining is a feature introduced in JavaScript that allows you
// to safely access nested properties or call functions on an object without
//  worrying about potential null or undefined values.
//  It helps to avoid runtime errors when working with deeply nested
//   objects or when properties may not exist.
// const person = {
//     name: "John",
//     age: 30,
//     address: {
//       street: "123 Main St",
//       city: "Example City",
//       country: "Example Country"
//     }
//   };
//   // Accessing nested property with optional chaining
//   const country = person?.address?.country;
//   console.log(country); // Output: "Example Country"
// [12]
// -------------------------------------------------------------------------------------//
//--Array Map method-------//
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((num) => num * 2);
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// --------//
// const persons = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 },
//     { name: "Tom", age: 35 }
//   ];
//   const personNames = persons.map((person) => person.name);
//   console.log(personNames); // Output: ["John", "Jane", "Tom"]
//   --------//
// const employees = [
//     { id: 1, name: "John", salary: 50000 },
//     { id: 2, name: "Jane", salary: 60000 },
//     { id: 3, name: "Tom", salary: 70000 }
//   ];
//   const salaries = employees.map((employee) => employee.salary);
//   console.log(salaries); // Output: [50000, 60000, 70000]
// ---------------------------------------//
// ----Array Filter Method-------//
// The filter() method in JavaScript is used to create a new array that
// contains elements from the original array that pass a certain condition
//  specified by a filtering function

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]
// ------//
// const employees = [
//   { id: 1, name: "John", salary: 50000 },
//   { id: 2, name: "Jane", salary: 60000 },
//   { id: 3, name: "Tom", salary: 70000 }
// ];
// const highEarners = employees.filter((employee) => employee.salary >= 60000);
// console.log(highEarners);
//   // Output: [
//   //   { id: 2, name: "Jane", salary: 60000 },
//   //   { id: 3, name: "Tom", salary: 70000 }
//   // ]
// --------//
// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(result)
// --------------------------------------//
//-----------ASYNCHRONOUS JS-------------//
// ---------fetch function---------------//
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(res=>res.json())
// .then(data => console.log(data))
// console.log('datas after fetch')

// -----------async , await--------------//
// async function fetchData(){
//    let res = await fetch("https://jsonplaceholder.typicode.com/todos")
//    let data = res.json();
//    console.log(data)
// }
// fetchData()
// console.log('data after async await')
// ---------------------------------------//
// let languages = 'javas javaScript ';
// let result = languages.lastIndexOf('S');
// console.log(result);
// -------------//
// let obj1 = {};
// let obj2 = new Object();
// var obj3 = {};
// console.log(obj1 == obj3, obj1 == obj2);
// --------------//
// const arr = [2, 3, 4, 5, 6];
// let sum = 0;
// const squareFn = (n) => {
//     sum += n;
// }
// arr.forEach(squareFn)
// console.log(sum)
// --------------//
// const numbers = [65, 44, 12, 4];
// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }
// numbers.forEach(myFunction)
// console.log(numbers)
// --------------//
// const numStr = '3.55';
// const result = parseInt(numStr);
// console.log(result); // Output: 3.14
// [13]
// -------------------------------------------------------------------------------------//
// let languages = 'java javaScript python cSharp';
// let result = languages.lastIndexOf('S');
// console.log(result);
// -------------//
// let variable = 'hello programmers';
// let result = Number(variable);
// console.log(result);
// -------------//
// let num1 = 32;
// let num2 = '32';
// let result1 = num1 !== num2;
// let result2 = num1 != num2;
// console.log(result1, result2);
// --------------//
// let str = 'Hello Programmers';
// let result = str.includes('r');
// console.log(result);
// --------------//
// let num1 = 2;
// let num2 = 5;
// let result = num1 ** num2 * 2;
// console.log(result);
// ---------------//
// let num1 = [1, 2, 4, 5];
// let num2 = [6, 5, 8, 0];
// let result = num1.concat(num2);
// console.log(result);
// --------------//
// let a = 5;
// let b = 7;
// let c = 8;
// let result = a < b > c;
// console.log(result);
// let i = 4;
// for (let j = 0; i < 10; i++) {
//     if (j === 1 || i === 6) {
//         continue;
//     } else {
//         console.log(i, j);
//         if (i === 7) {
//             break;
//         }
//     }
// }
// --------------//
// let i = 0;
// for (i; i < 5; i++) {
//     console.log(i);
// }
// --------------//
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);
// --------------//
// const dishes = ['puri', 'sabji', 'aam', 'kela'];
// for (i = 0; i < dishes.length; i++) {
//     console.log(dishes[i])
// }
// dishes.forEach((item) => {
//     console.log(item)
// })
// ---------------//
// FOREACH LOOP FOR ARRAY
// const numbers = [1, 2, 3, 4, 5, 6]
// const squaredNumbers = [];
// numbers.forEach(function (number) {
//     squaredNumbers.push(number * number);
// });
// console.log(squaredNumbers);
// ---------------//
// FOR IN LOOP FOR OBJECT
// const person = {
//   name: 'John Doe',
//   age: 30,
//   occupation: 'Engineer',
// };
// for (const key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log(`${key}: ${person[key]}`);
//   }
// }
//--------------------------------------------//
// let sec = 1;
// function task() {
//   console.log(`john after ${sec} second`)
//   sec++;
//   if (sec === 6) {
//     clearInterval(id);
//   }
// }
// let id = setInterval(task, 1000);
// -----------------//
// let person = {
//   name: 'john',
//   age: 25,
// };
// function greet(person) {
//   person.name = `Mr ${person.name}`;
//   return `Welcome ${person.name}`;
// }
// console.log(greet(person));
// console.log(person.name);
// [14]
// -------------------------------------------------------------------------------------//
// HIGH ORDER FUNC
// function performOperation(num1, num2, operationCallback) {
//   return operationCallback(num1, num2);
// }
// function add(a, b) {
//   return a + b;
// }
// function multiply(a, b) {
//   return a * b;
// }
// console.log(performOperation(5, 3, add));      // Output: 8 (5 + 3)
// console.log(performOperation(5, 3, multiply)); // Output: 15 (5 * 3)
// console.log("divya")
// ---------------//
// HIGH ORDER FUNC
// function createGreetingGenerator(greeting) {
//   return function (name) {
//     return `${greeting}, ${name}!`;
//   };
// }

// const sayHello = createGreetingGenerator('Hello');
// console.log(sayHello('John')); // Output: "Hello, John!"
// const sayHi = createGreetingGenerator('Hi');
// console.log(sayHi('Alice'));   // Output: "Hi, Alice!"
// console.log("divya")
// ----------------//
// CALLBACK FUNCTION
// function fetchDataFromServer(callback) {
//     // Simulating an asynchronous operation (e.g., fetching data from a server)
//     setTimeout(function () {
//         const data = [1, 2, 3, 4, 5];
//         callback(data);
//     }, 1000);
// }
// function processReceivedData(data) {
//     console.log("Data received:", data);
// }
// fetchDataFromServer(processReceivedData); // Callback function "processReceivedData" is passed as an argument.
// console.log("divya gaurav")
// ---------------//
// CALLBACK FUNC
// function fetchDataFromServer(callback) {
//   // Simulate asynchronous data fetching from a server
//   setTimeout(function () {
//     const data = { message: "Hello, world!" };
//     callback(data); // Execute the callback function with the retrieved data
//   }, 1000);
// }
// function processData(data) {
//   console.log(data.message);
// }
// fetchDataFromServer(processData);
// console.log("gaurav")
// --------------------------------//

// ARRAY REDUCE METHOD
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)
// ----------------//
// const values = [10, 23, 5, 45, 32];
// const max = values.reduce(
//     (accumulator, currentValue) => Math.max(accumulator, currentValue));
// console.log(max); // Output: 45
// -----------------//
// ARRAY EVERY AND SOME METHOD
// const numbers = [2, 4, 6, 8];
// const allEven = numbers.every((num) => num % 2 === 1);
// console.log(allEven);
// -----------------//
// const numbers = [1, 3, 5, 7, 8];
// const hasEven = numbers.some((num) => num % 2 === 0);
// console.log(hasEven);
// Output: true (At least one element is even)
// -----------------//
// SORTING IN CASE OF NUMBER ELEMENT IN ARRAY
const numbers = [5, 2, 9, 1, 5, 6];
// Sorting in ascending order using the compare function
// numbers.sort((a, b) => a - b);
// console.log(numbers); // Output: [1, 2, 5, 5, 6, 9]
// numbers.sort((a, b) => b - a);
// console.log(numbers); // Output: [9, 6, 5, 5, 2, 1]
// [15]
// ----------------------------------------------------------------------------------//
//-------JS STRING ----------//
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
// let part = str.substr(-7, 6);
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
// ----------->
// POPUP Message
// alert()
// prompt()
// confirm()

// alert('dfdf');

// let respond = confirm('are you fine ?')
// console.log(respond);

// let age = prompt('Enter Your age');
// console.log(age);

// ----------->
// js is dynamic type language this means same variable can holds
// diffrent datatype(number , string , array , object)

// NOTE :- JS evaluates expression from Left To Right
// let x  = 16+4+"volvo";
// let y = "volvo" + 16+4;
// console.log(x)
// console.log(y)
// [16]
// --------------------------------------------------------------------------------------//



// =======================OOPS====================//

// // ---------------------------------------//
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// Person.hey = function () {
//   console.log('Hey there 👋');
//   console.log(this);
// };
// Person.hey();
// ---------------------------------------------//
// Prototypes
// let Person = { name: 'divya' }
// console.log(Person);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototyeOfLinkedObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));


///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
// console.log(jonas.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();


///////////////////////////////////////
// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);
// PersonCl.hey();


///////////////////////////////////////
// Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);


///////////////////////////////////////
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

///////////////////////////////////////
// Coding Challenge #2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);


///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

///////////////////////////////////////
// Coding Challenge #3

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // Link the prototypes
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();


// ///////////////////////////////////////
// // Inheritance Between "Classes": ES6 Classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there 👋');
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${2037 - this.birthYear
//       } years old, but as a student I feel more like ${2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();


// ///////////////////////////////////////
// // Inheritance Between "Classes": Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven)
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   // BUG in video:
//   // console.log(`My name is ${this.fullName} and I study ${this.course}`);

//   // FIX:
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();


// ///////////////////////////////////////
// // Encapsulation: Protected Properties and Methods
// // Encapsulation: Private Class Fields and Methods

// // 1) Public fields
// // 2) Private fields
// // 3) Public methods
// // 4) Private methods
// // (there is also the static version)

// class Account {
//   // 1) Public fields (instances)
//   locale = navigator.language;

//   // 2) Private fields (instances)
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;

//     // Protected property
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // 3) Public methods

//   // Public interface
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     // if (this.#approveLoan(val)) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//       return this;
//     }
//   }

//   static helper() {
//     console.log('Helper');
//   }

//   // 4) Private methods
//   // #approveLoan(val) {
//   _approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);

// // acc1._movements.push(250);
// // acc1._movements.push(-140);
// // acc1.approveLoan(1000);

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1.getMovements());
// console.log(acc1);
// Account.helper();

// // console.log(acc1.#movements);
// // console.log(acc1.#pin);
// // console.log(acc1.#approveLoan(100));

// // Chaining
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements());
// */

// ///////////////////////////////////////
// // Coding Challenge #4

// /*
// 1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
// 2. Make the 'charge' property private;
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

// DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

// GOOD LUCK 😀
// */

// /*
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//     return this;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// class EVCl extends CarCl {
//   #charge;

//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }

//   chargeBattery(chargeTo) {
//     this.#charge = chargeTo;
//     return this;
//   }

//   accelerate() {
//     this.speed += 20;
//     this.#charge--;
//     console.log(
//       `${this.make} is going at ${this.speed} km/h, with a charge of ${
//         this.#charge
//       }`
//     );
//     return this;
//   }
// }

// const rivian = new EVCl('Rivian', 120, 23);
// console.log(rivian);
// // console.log(rivian.#charge);
// rivian
//   .accelerate()
//   .accelerate()
//   .accelerate()
//   .brake()
//   .chargeBattery(50)
//   .accelerate();

// console.log(rivian.speedUS);
// */








// // ==============================================================//


























// // -----------------------------------------------------------------------------------//
// // FUNCTION
// // function sum(a , b , c){
// //     console.log(a, b, c)
// //     return a+b+c;
// // }
// // console.log(sum(3, 5)) //5+undefined = NaN

// // ----------------->
// // let nam = 'global';
// // function scpoeDemo(){
// //    nam = "divya"
// //     console.log(nam);
// // }
// // scpoeDemo()
// // console.log(nam)
// // -------------->
// // let nam = 'global';
// // function scpoeDemo(){
// //   let nam = "divya"
// //     console.log(nam);
// // }
// // scpoeDemo()
// // console.log(nam)
// // ------------>
// // function scope
// // function outer(){
// //     var outerVar = 10;
// //     function inner(){
// //         console.log(outerVar)
// //     }
// //     inner()
// // }
// // outer();
// // inner()
// // -------->
// // console.log(factorial(5))
// // console.log(factorial)
// // var factorial = function (n){
// //     var ans = 1;
// //     for(var i=1; i<=n; i++){
// //         ans*=i;
// //     }
// //     return ans;
// // }
// // ------------------------------------------------------------------------//
// // Can arrow function be hoisted?
// // Arrow functions are not hoisted as they are also function
// // expressions where the function is assigned as a value to the variable.
// // ------------->
// // function call Inside function
// // let combineStr = '';
// // function a(){
// //     combineStr = 'inside a'
// //     function b(){
// //         combineStr = combineStr + ' inside b'
// //     }
// //     b()
// // }
// // a();
// // console.log(combineStr);
// // ------------->
// // var nam = 'global';
// // function outer(){
// //     var nam = 'outer';
// //     var outerVar = 10;
// //     function inner(){
// //         var nam = 'inner'
// //         var innerVar = 100;
// //         console.log(nam , outerVar);
// //     }
// //     inner();
// //     console.log(nam)
// // }
// // outer();
// // console.log(nam);

// // -------------->
// // const arr = [2,3,4,5]
// // arr.splice(11, 1 , 999)
// // console.log(arr);
// // --------->
// // var color = ['red', 'blue', 'orange' , 'violet'];
// // var removed = color.splice(2);
// // console.log(removed)
// // console.log(color)
// // ------------->
// // delete keyword used in object
// // var student = {
// //     'name' : 'dg',
// //     'age' : 25
// // }
// // console.log(student)
// // delete student.age;
// // console.log(student)

// // ----------------------------------------------------------------------//

// //-------Destructuring of array-----
// // const numbers = [1, 2, 3, 4, 5];
// // // Destructuring assignment
// // const [first, second, ...rest] = numbers;
// // console.log(first);  // Output: 1
// // console.log(second); // Output: 2
// // console.log(rest);   // Output: [3, 4, 5]
// // //-------Destructuring of object----
// // const person = {
// //     name: 'John Doe',
// //     age: 30,
// //     profession: 'Engineer'
// //   };
// //   // Destructuring assignment
// //   const { name, age, profession } = person;

// //   console.log(name);       // Output: John Doe
// //   console.log(age);        // Output: 30
// //   console.log(profession); // Output: Engineer

// // -----------------------------------------------------//

// // // -----------------------------------
// // // continue and break
// // console.log('--- ONLY STRINGS ---')
// // for (let i = 0; i < jonas.length; i++) {
// //   if (typeof jonas[i] !== 'string') continue;
// //   console.log(jonas[i], typeof jonas[i]);
// // }

// // console.log('--- BREAK WITH NUMBER ---')
// // for (let i = 0; i < jonas.length; i++) {
// //   if (typeof jonas[i] === 'number') break;

// //   console.log(jonas[i], typeof jonas[i]);
// // }
// // for (let i = jonas.length - 1; i >= 0; i--) {
// //   console.log(i, jonas[i]);
// // }

// // for (let exercise = 1; exercise < 4; exercise++) {
// //   console.log(`-------- Starting exercise ${exercise}`);

// //   for (let rep = 1; rep < 6; rep++) {
// //     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
// //   }
// // }
// // // -----------------
// // // The while Loop
// // for (let rep = 1; rep <= 10; rep++) {
// //   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// // }

// // let rep = 1;
// // while (rep <= 10) {
// //   // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
// //   rep++;
// // }

// // let dice = Math.trunc(Math.random() * 6) + 1;

// // while (dice !== 6) {
// //   console.log(`You rolled a ${dice}`);
// //   dice = Math.trunc(Math.random() * 6) + 1;
// //   if (dice === 6) console.log('Loop is about to end...');
// // }

// //-------------------------------------------------------------

// // -------------------AJAX--------------//

// // const xhr = new XMLHttpRequest();
// // const url = "https://jsonplaceholder.typicode.com/users"; // Replace with the actual API endpoint
// // console.log(XMLHttpRequest.DONE)
// // xhr.open("GET", url, false);

// // xhr.onreadystatechange = function () {
// //     if (xhr.readyState === XMLHttpRequest.DONE) {
// //         if (xhr.status === 200) {
// //             const responseData = JSON.parse(xhr.responseText);
// //             console.log(responseData); // Process the received data here
// //         } else {
// //             console.error("Error occurred while fetching data.");
// //         }
// //     }
// // };
// // xhr.send();
// // console.log("asyncronous operation");

// //=======================THE END=========================//


// // function sum() {
// //   console.log(arguments.length);
// // }
// // sum(1, 2, 3, 4);
// // ------------------------//

// // function greet(name) {
// //   console.log(`Hello, ${name}!`);
// // }
// // function greet(firstName, lastName) {
// //   console.log(`Hello, ${firstName} ${lastName}!`);
// // }
// // greet("Alice"); // This will not work as expected, it will call the second version
// // greet("Bob", "Smith"); // This will work and call the second version

// // --------------------------------------------------//
// // const myPromise = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     const success = false;
// //     if (success) {
// //       resolve("operation succesful")
// //     } else {
// //       reject("operation failed");
// //     }
// //   }, 1000);
// // })

// // myPromise.then((result) => console.log(result)).catch(err => console.log(err));
// // -------------------------------------//

// // const fetchData = async () => {
// //   try {
// //     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
// //     const data = await response.json();
// //     console.log(data);
// //   } catch (err) {
// //     console.log(err)
// //     throw err;
// //   }
// // }
// // fetchData();
// // console.log('data')
// // --------------------------------------//
// // async function fetchData(url) {
// //   try {
// //     const response = await fetch(url);
// //     if (!response.ok) {
// //       throw new Error(`HTTP error! Status: ${response.status}`);
// //     }
// //     const data = await response.json();
// //     console.log('Data:', data);
// //   } catch (error) {
// //     console.error('Fetch error:', error);
// //   }
// // }

// // fetchData('https://api.example.com/data');

// // --------------------------------------------------------------//
// // const Person = {
// //   name: 'divya',
// //   age: 23,
// //   gender: 'male',
// //   occ: 'student'
// // }
// // for (let i in Person) {
// //   console.log(Person[i]);
// // }