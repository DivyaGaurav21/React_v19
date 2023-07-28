//---------------------------------------------------------
//-------Destructuring of array-----
// const numbers = [1, 2, 3, 4, 5];

// // Destructuring assignment
// const [first, second, ...rest] = numbers;

// console.log(first);  // Output: 1
// console.log(second); // Output: 2
// console.log(rest);   // Output: [3, 4, 5]

// //-------Destructuring of object----
// const person = {
//     name: 'John Doe',
//     age: 30,
//     profession: 'Engineer'
//   };
  
//   // Destructuring assignment
//   const { name, age, profession } = person;
  
//   console.log(name);       // Output: John Doe
//   console.log(age);        // Output: 30
//   console.log(profession); // Output: Engineer

//-------------------------------------------------------------
//---Arrow Fn-----
// const obj = {
//     name: 'John',
//     greet: function() {
//       setTimeout(() => {
//         console.log(`Hello, ${this.name}!`); // `this` refers to obj
//       }, 1000);
//     }
//   };
  
//   obj.greet(); // Output: Hello, John!

// -------
// const multiplyNumbers = (a, b) => a * b;
// console.log(multiplyNumbers(2, 3)); // Output: 6
// --------
// const addNumbers = (a, b) => {
//     return a + b;
//   };
//   console.log(addNumbers(2, 3)); // Output: 5
  
// -----------------------------------------------------------------

//-----Spread Parameter------
// . It provides a convenient way to copy or merge arrays, pass multiple 
// arguments to functions, or create new arrays with existing elements.
//  The spread syntax uses the ellipsis (...) notation.

// const numbers = [1, 2, 3];
// const expandedNumbers = [...numbers, 4, 5];
// console.log(expandedNumbers); // Output: [1, 2, 3, 4, 5]
// --------
// const originalArray = [1, 2, 3];
// const copiedArray = [...originalArray];
// console.log(copiedArray); // Output: [1, 2, 3]
// -------
// function sum(a, b, c) {
//     return a + b + c;
//   }
//   const numbers = [1, 2, 3];
//   const result = sum(...numbers);
//   console.log(result); // Output: 6
// -------
// const person = {
//     name: 'John',
//     age: 30,
//     profession: 'Engineer'
//   };
//   // Update the age property
//   const updatedPerson = {
//     ...person,
//     age: 31
//   };
  
//   console.log(updatedPerson);

// ------------------------------------------------------------------
// //-------Rest Parameter-------------
// The rest parameter is a feature in JavaScript that allows a
//  function to accept an indefinite number of arguments as an array

// function sum(...numbers) {
//     let total = 0;
//     for (let num of numbers) {
//       total += num;
//     }
//     return total;
//   }
  
//   console.log(sum(1, 2, 3));               // Output: 6
//   console.log(sum(4, 5, 6, 7, 8));         // Output: 30
//   console.log(sum(2, 4, 6, 8, 10, 12));    // Output: 42
// ------------
// function concatenate(separator, ...strings) {
//     return strings.join(separator);
//   }
//   console.log(concatenate('-', 'a', 'b', 'c'));   // Output: 'a-b-c'
//   console.log(concatenate(' ', 'Hello', 'World')); // Output: 'Hello World'

// --------------------------------------------------------------------

//------Terniary operator--------
// const age = 25;
// const isAdult = age >= 18 ? 'Adult' : 'Minor';
// console.log(isAdult); // Output: 'Adult'
// ---------
// function getDiscount(isMember) {
//     return isMember ? 0.2 : 0.1;
//   }
//   console.log(getDiscount(true));  // Output: 0.2
//   console.log(getDiscount(false)); // Output: 0.1

// -------------------------------------------------------------------

// conditional rendering with logical operator 
// function checkPermissions(user) {
//     return user && user.isAdmin ? "Admin" : "Regular User";
//   }
//   // Usage
//   const user = {
//     name: "John Doe",
//     isAdmin: true
//   };
//   console.log(checkPermissions(user)); // Output: "Admin"
// // -------
// console.log(true && 'some string');
// console.log(false && 'no string')

// --------------------------------------------------------------------

//---optional chaining--------
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

// -------------------------------------------------------------------

//--Array Map method-------
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((num) => num * 2);
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// --------
// const persons = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 },
//     { name: "Tom", age: 35 }
//   ];
//   const personNames = persons.map((person) => person.name);
//   console.log(personNames); // Output: ["John", "Jane", "Tom"]
//   --------
// const employees = [
//     { id: 1, name: "John", salary: 50000 },
//     { id: 2, name: "Jane", salary: 60000 },
//     { id: 3, name: "Tom", salary: 70000 }
//   ];
//   const salaries = employees.map((employee) => employee.salary);
//   console.log(salaries); // Output: [50000, 60000, 70000]

// --------------------------------------------------------------------

// ----Array Filter Method-------
// The filter() method in JavaScript is used to create a new array that 
// contains elements from the original array that pass a certain condition
//  specified by a filtering function

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]
// ------
// const employees = [
//     { id: 1, name: "John", salary: 50000 },
//     { id: 2, name: "Jane", salary: 60000 },
//     { id: 3, name: "Tom", salary: 70000 }
//   ];
  
//   const highEarners = employees.filter((employee) => employee.salary >= 60000);
  
//   console.log(highEarners);
//   // Output: [
//   //   { id: 2, name: "Jane", salary: 60000 },
//   //   { id: 3, name: "Tom", salary: 70000 }
//   // ]
// --------
// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(result)

// --------------------------------------------------------------------------
//-----ASYNCHRONOUS JS--------
// -----fetch function------
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(res=>res.json())
// .then(data => console.log(data))
// console.log('datas after fetch')

//-----async , await-------
// async function fetchData(){
//    let res = await fetch("https://jsonplaceholder.typicode.com/todos")
//    let data = res.json();
//    console.log(data)
// }
// fetchData()
// console.log('data after async await')

// --------------------------------------------------------------------------



  

  



  


  
  

  
  




  
  