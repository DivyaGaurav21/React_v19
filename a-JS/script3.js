//********************W3 REFERENCE W3 SCHCOOL***************************//

//%%%%%%%%%%%%%%%%%%%%% ASYNCRONOUS PROGRAM %%%%%%%%%%%%%%%%%%%%%%%%%%%%%//

// ------------------------[1] callback func-----------------------------//
// A callback is a function passed as an argument to another function.
// This technique allows a function to call another function.
// A callback function can run after another function has finished.

// Where callbacks really shine are in asynchronous functions, where one
// function has to wait for another function (like waiting for a file to load).

// -----------------------> need of callback---------->
// function myDisplayer(some) {
//    console.log(some);
//   }
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }
//   let result = myCalculator(5, 5);
//   myDisplayer(result);
//   -------------------->
// function myDisplayer(some) {
//    console.log(some);
//   }
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     myDisplayer(sum);
//   }
//   myCalculator(6, 5);
//   console.log('check code flow');
//   -------------------->
// ---------------------------IMPORTANT -----------------------------------//
// Callbacks can be synchronous or asynchronous:The nature of a callback function
// depends on how it is implemented and where it is used in the code.
// function myDisplayer(some) {
//   console.log(some);
// }
// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }
// myCalculator(5, 5, myDisplayer);
// console.log('check code flow');
// ------------------------------->
// function myDisplayer(some) {
//   setTimeout(() => console.log(some), 2000)
// }
// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }
// myCalculator(6, 5, myDisplayer);
// console.log('check code flow');
// ----------------------------------->
// function syncFunction(callback) {
//   console.log("Doing something before the callback");
//   callback();
//   console.log("Doing something after the callback");
// }
// syncFunction(function () {
//   console.log("This is a synchronous callback");
// });
//   ----------------------------------->
// function asyncFunction(callback) {
//   console.log("Doing something before the callback");
//   setTimeout(function () {
//     console.log("This is an asynchronous callback");
//     callback();
//   }, 1000);
// }
// asyncFunction(function () {
//   console.log("Callback executed after 1 second");
// });
// ------------------------------------->
// Simulated function to load users asynchronously
// function loadUsers(callback) {
//   setTimeout(function () {
//     const users = [
//       { id: 1, name: "Alice" },
//       { id: 2, name: "Bob" },
//       { id: 3, name: "Charlie" },
//     ];
//     callback(users);
//   }, 2000);
// }
// function displayUsers(users) {
//   console.log("Loaded Users:");
//   users.forEach(function (user) {
//     console.log(user.name);
//   });
// }
// loadUsers(displayUsers);

//============================NESTED CALLBACK================================//
//-------Function to perform an operation synchronously----------------------//
// function syncOperation(data, callback) {
//     console.log(`Processing data: ${data}`);
//     callback();
//   }

//   // Nested synchronous callbacks
//   console.log("Start of the program");

//   syncOperation("Step 1", function() {
//     console.log("Step 1 completed.");

//     syncOperation("Step 2", function() {
//       console.log("Step 2 completed.");

//       syncOperation("Step 3", function() {
//         console.log("Step 3 completed.");
//         console.log("End of the program");
//       });
//     });
//   });
//   console.log("flow check ");

//-------Function to perform an operation Asynchronously----------------------//

// Simulated function to fetch user data from an API asynchronously
// function fetchUserData(userId, callback) {
//     setTimeout(function() {
//       const userData = {
//         id: userId,
//         name: "John Doe",
//         email: "john@example.com",
//       };
//       callback(userData);
//     }, 2000);
//   }
//   function fetchUserPosts(userId, callback) {
//     setTimeout(function() {
//       const userPosts = [
//         { id: 1, title: "Post 1", content: "This is the first post." },
//         { id: 2, title: "Post 2", content: "This is the second post." },
//       ];
//       callback(userPosts);
//     }, 1500);
//   }
//   // Function to fetch user data and their posts using nested callbacks
//   function fetchUserDataAndPosts(userId) {
//     fetchUserData(userId, function(userData) {
//       console.log("User Data:", userData);

//       fetchUserPosts(userId, function(userPosts) {
//         console.log("User Posts:", userPosts);
//       });
//     });
//   }
//   // Call fetchUserDataAndPosts with a user ID
//   fetchUserDataAndPosts(123);
// console.log("flow check");

// // ------------------------------------------>
// Function to add two numbers asynchronously
// function addAsync(num1, num2, callback) {
//     setTimeout(function() {
//       const result = num1 + num2;
//       callback(result);
//     }, 1000);
//   }
//   function multiplyAsync(num1, num2, callback) {
//     setTimeout(function() {
//       const result = num1 * num2;
//       callback(result);
//     }, 1500);
//   }
//   function performOperations(num1, num2) {
//     addAsync(num1, num2, function(sumResult) {
//       console.log(`Sum: ${sumResult}`);

//       multiplyAsync(sumResult, num2, function(multiplyResult) {
//         console.log(`Multiplication: ${multiplyResult}`);

//         const finalResult = multiplyResult / num1;
//         console.log(`Final Result: ${finalResult}`);
//         // setTimeout(() => console.log(finalResult) , 1000)
//       });
//     });
//   }
//   performOperations(5, 3);
//   console.log("flow check")
// ----------------------------->
// Function to perform the first step: Preheat the oven
// function preheatOven(temperature, callback) {
//     console.log(`Step 1: Preheating the oven to ${temperature}°C...`);
//     setTimeout(function() {
//       console.log("Oven preheated!");
//       callback();
//     }, 2000); // Simulating a delay of 2 seconds for preheating
//   }

//   // Function to perform the second step: Prepare the cake mix
//   function prepareCakeMix(callback) {
//     console.log("Step 2: Preparing the cake mix...");
//     setTimeout(function() {
//       console.log("Cake mix ready!");
//       callback();
//     }, 1500); // Simulating a delay of 1.5 seconds for preparation
//   }

//   // Function to perform the third step: Pour the cake mix into a baking pan
//   function pourIntoBakingPan(callback) {
//     console.log("Step 3: Pouring the cake mix into the baking pan...");
//     setTimeout(function() {
//       console.log("Cake mix poured into the baking pan!");
//       callback();
//     }, 1000); // Simulating a delay of 1 second for pouring
//   }

//   // Function to perform the final step: Bake the cake in the oven
//   function bakeCake(callback) {
//     console.log("Step 4: Baking the cake...");
//     setTimeout(function() {
//       console.log("Cake baked and ready!");
//       callback();
//     }, 3000); // Simulating a delay of 3 seconds for baking
//   }

//   // Nested callbacks to perform the cooking process
// preheatOven(180, function () {
//   prepareCakeMix(function () {
//     pourIntoBakingPan(function () {
//       bakeCake(function () {
//         console.log("All done! Cake is ready to be served.");
//       });
//     });
//   });
// });

// --------------------------->
// const myNumbers = [4, 1, -20, -7, 5, 9, -6];
// function removeNeg(numbers, callback) {
//     const myArray = [];
//     for (const x of numbers) {
//       if (callback(x)) {
//         myArray.push(x);
//       }
//     }
//     return myArray;
//   }
// // Call removeNeg with a callback
// const posNumbers = removeNeg(myNumbers, (x) => x >= 0);
// console.log(posNumbers)


// ==================================PROMISE==================================//
// In JavaScript, a Promise is an object that represents a value that may not
//  be available yet but will be resolved or rejected at some point in the future.
//  Promises provide a clean and structured way to handle asynchronous operations
//  and manage the flow of data between asynchronous tasks. They were introduced
// to address the issue of "callback hell" and make asynchronous code more readable
// and maintainable.

// A Promise can be in one of three states:
// Pending: The initial state when a Promise is created, and the
//   asynchronous operation is ongoing.
// Fulfilled (Resolved): The state when the asynchronous operation
//   is successful, and the Promise has a resolved value.
// Rejected: The state when the asynchronous operation encounters
//   an error, and the Promise has a reason for rejection.

// syntax
// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation here, which will eventually call resolve() or reject()
// "Producing Code" (May take some time)
// resolve(); // when successful
// reject();  // when error
//   });
// ---------
// myPromise
//   .then((resolvedValue) => {
//     // Handle the resolved value here
//   })
//   .catch((errorReason) => {
//     // Handle the error reason here
//   });
// --------
// myAsyncTask()
//   .then((result) => {
//     // Do something with the result
//     return anotherAsyncTask(result);
//   })
//   .then((anotherResult) => {
//     // Do something with the result of anotherAsyncTask
//   })
//   .catch((error) => {
//     // Handle any error that occurred in any of the tasks
//   });

// --------------------------promise example code--------------------------------------//
// Function to fetch data asynchronously using a Promise
// function fetchDataFromAPI() {
//     return new Promise((resolve, reject) => {
//       // Simulate an API call after a delay of 2 seconds
//       setTimeout(() => {
//         const data = { name: "John", age: 30 };
//         // Resolve the Promise with the fetched data
//         resolve(data);
//         // For simulating an error, you can reject the Promise like this:
//         // reject(new Error("Failed to fetch data from the API"));
//       }, 2000);
//     });
//   }

//   // Using the Promise to fetch data and handle the result
//   console.log("Start of the program");

//   fetchDataFromAPI()
//     .then((data) => {
//       console.log("Received data:", data);
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error.message);
//     })
//     .finally(() => {
//       console.log("End of the program");
//     });

// console.log("flow check")
// ------------------------------------->

// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// // Function to fetch data asynchronously using fetch and Promises
// function fetchDataFromApi(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Failed to fetch data from ${url}, status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }

// // Usage of the Promise to fetch data and handle the result
// console.log("Start fetching data...");

// fetchDataFromApi(apiUrl)
//   .then((data) => {
//     console.log("Received data:", data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error.message);
//   })
//   .finally(() => {
//     console.log("End of the program");
//   });


// ------------------------------------->
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// // Function to fetch data asynchronously using fetch and Promises
// function fetchDataFromApi(url) {
//   return fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Failed to fetch data from ${url}, status: ${response.status}`);
//       }
//       return response.json();
//     });
// }

// // Usage of the Promise to fetch data and handle the result
// console.log("Start fetching data...");

// fetchDataFromApi(apiUrl)
//   .then((data) => {
//     console.log("Received data:", data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error.message);
//   })
//   .finally(() => {
//     console.log("End of the program");
//   });


// ===============================ASYNC/AWAIT========================//

// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise

// async/await is a modern JavaScript feature  that provides a more
// synchronous-like syntax for handling asynchronous operations. It makes working
// with Promises and other asynchronous code more readable and easier to
//  manage. Instead of chaining .then() and .catch() methods,

// async/await allows you to write asynchronous code that looks similar
//  to synchronous code,and avoiding callback hell.

// The async keyword is used to define an asynchronous function, and within
//  an asynchronous function, you can use the await keyword to pause the
//  execution of the function until a Promise is resolved. When using await, the
//   function will not continue until the awaited Promise is fulfilled or rejected.

//await keyword
// The await keyword makes the function pause the execution and wait for
//  a resolved promise before it continues:

// async/await syntax:
// async function myAsyncFunction() {
//     // Code before await
//     try {
//       const result = await someAsyncOperation();
//       // Code after await, using the result
//     } catch (error) {
//       // Handle errors if the Promise is rejected
//     }
//   }

// --------------------------->
// Function to fetch data asynchronously using fetch and async/await
// async function fetchDataFromApi(url) {
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error(`Failed to fetch data from ${url}, status: ${response.status}`);
//   }
//   const data = await response.json();
//   return data;
// }
// // Usage of the async/await function to fetch data and handle the result
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// console.log("Start fetching data...");
// const requiresData = async () => {
//   try {
//     const data = await fetchDataFromApi(apiUrl);
//     console.log("Received data:", data);
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//   } finally {
//     console.log("End of the program");
//   }
// };

// requiresData();
// console.log("check code flow");

// ----------------------------------->
// Function to fetch data asynchronously using fetch and async/await
// async function fetchDataFromApi(url) {
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error(`Failed to fetch data from ${url}, status: ${response.status}`);
//   }
//   const data = await response.json();
//   return data;
// }
// // Function to fetch data from multiple APIs and process the results sequentially
// async function fetchAndProcessData() {
//   const apiUrl1 = 'https://jsonplaceholder.typicode.com/posts';
//   const apiUrl2 = 'https://jsonplaceholder.typicode.com/comments';

//   try {
//     // Fetch data from the first API
//     const postsData = await fetchDataFromApi(apiUrl1);
//     console.log("Posts Data:", postsData);

//     // Fetch data from the second API
//     const commentsData = await fetchDataFromApi(apiUrl2);
//     console.log("Comments Data:", commentsData);

//     // Perform additional operations with the data
//     // ...
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//   }
// }

// //   // Usage of the async/await function to fetch and process data
// console.log("Start fetching and processing data...");

// fetchAndProcessData().finally(() => {
//   console.log("End of the program");
// });

// --------------------->
// async function myDisplay() {
//   let myPromise = new Promise(function (resolve) {
//     resolve("I love You !!");
//   });
//   return myPromise;
// }

// myDisplay().then(res => console.log(res))

// %%%%%%%%%%%%%%%%%%%%%%%%%%% JSON %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//

// JSON stands for JavaScript Object Notation
// JSON is a lightweight data-interchange format
// JSON is plain text written in JavaScript object notation
// JSON is used to send data between computers
// JSON is language independent *
// The JSON syntax is derived from JavaScript object notation,
// but the JSON format is text only.

// JavaScript has a built in function for converting JSON strings into
//  JavaScript objects:
// JSON.parse()

// JavaScript also has a built in function for converting an object
//  into a JSON string:
// JSON.stringify()

// You can receive pure text from a server and use it as a JavaScript object.
// You can send a JavaScript object to a server in pure text format.
// You can work with data as JavaScript objects, with no complicated
// parsing and translations.
// JSON makes it possible to store JavaScript objects as text.

// SYNTAX:
// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays
// JSON names require double quotes. like "name":"divya"
// string values must be written with double quotes:

// In JSON, values must be one of the following data types:
// a string
// a number
// an object
// an array
// a boolean
// null
// ------------>
// JSON values cannot be one of the following data types:
// a function
// a date
// undefined

// example
// {"employees":[
//     { "firstName":"John", "lastName":"Doe" },
//     { "firstName":"Anna", "lastName":"Smith" },
//     { "firstName":"Peter", "lastName":"Jones" }
//   ]}

//%%%%%%%%%%%%%%%%%%%%%%%%%%% CLOSURE %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//

// function outerFunction() {
//     const message = "Hello";
//     function innerFunction() {
//       console.log(message); // Accessing the variable from the outer function
//     }
//     return innerFunction;
//   }

//   const closureExample = outerFunction();
//   closureExample(); // Output: "Hello"

// --------------------------->
// function createCounter() {
//   let count = 0;
//   function increment() {
//     count++;
//     console.log(count);
//   }
//   return increment;
// }

// const counter = createCounter();
// counter(); // Output: 1
// counter(); // Output: 2
// ----------------------------->
// function createPerson(name) {
//     let age = 30; // Private variable
//     function getDetails() {
//       console.log(`Name: ${name}, Age: ${age}`);
//     }
//     function setAge(newAge) {
//       age = newAge; // Accessing and modifying private variable
//     }
//     return {
//       getDetails,
//       setAge,
//     };
//   }

//   const person = createPerson("John");
//   person.getDetails(); // Output: "Name: John, Age: 30"
//   person.setAge(35);
//   person.getDetails(); // Output: "Name: John, Age: 35"
// ---------------------------------->
// function createEmployee(name) {
//   let salary = 50000;

//   function getSalary() {
//     return salary;
//   }

//   function increaseSalary(amount) {
//     salary += amount;
//   }

//   return {
//     name,
//     getSalary,
//     increaseSalary,
//   };
// }
// const employee = createEmployee("Alice");
// console.log(employee.name); // Output: "Alice"
// console.log(employee.getSalary()); // Output: 50000
// employee.increaseSalary(5000);
// console.log(employee.getSalary()); // Output: 55000
// --------------------------------------->
// function doSomethingAsync(callback) {
//     setTimeout(function() {
//       console.log("Async operation completed");
//       callback();
//     }, 1000);
//   }

//   function callbackFunction() {
//     console.log("Callback function executed");
//   }

//   doSomethingAsync(callbackFunction);
// --------------------------------------------->
// function add(x) {
//     return function(y) {
//       return x + y;
//     };
//   }

//   const add5 = add(5);
//   console.log(add5(3)); // Output: 8
//   console.log(add5(7)); // Output: 12
// -------------------------------------------->
// Currying using Closure:
// function multiply(x) {
//   return function (y) {
//     return x * y;
//   };
// }

// console.log(multiply(2)(3)); // Output: 24

// ====================INTERVIEW IMPORTANT QUESTION ==========================//

//------------------------------------------------------//
//--------Check if a number is prime.------------------//
// function isPrime(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(17)); // Output: true

//------------------------------------------------------//
//--------Find the intersection of two arrays.---------//
// function findIntersection(arr1, arr2) {
//   const set1 = new Set(arr1);
//   const set2 = new Set(arr2);
//   return Array.from(set1).filter((num) => set2.has(num));
// }
// console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]


//--------------------------------------------------------//
// ---Find the first non-repeated character in a string.--//
// function findFirstNonRepeatedCharacter(str) {
//   const charCount = {};
//   for (let char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   for (let char of str) {
//     if (charCount[char] === 1) {
//       return char;
//     }
//   }
//   return null;
// }

// console.log(findFirstNonRepeatedCharacter("aabbcdee")); // Output: "c"

// ----------------------------------------------------------//
// Check if two strings are anagrams//
//  (contain the same characters in a different order).//
// function areAnagrams(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }

// console.log(areAnagrams("listen", "silent")); // Output: true


// ----------------------------------------------------------//
// Given an array of integers, find the sum of //
// all positive numbers in the array.//
// function sumOfPositiveNumbers(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     if (num > 0) {
//       sum += num;
//     }
//   }
//   return sum;
// }

// const numbers = [2, -4, 6, -8, 10, 1, -3];
// console.log(sumOfPositiveNumbers(numbers)); // Output: 19 (2 + 6 + 10 + 1)

// =======================THE END================================//