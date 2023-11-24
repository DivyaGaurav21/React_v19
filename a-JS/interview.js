// REST PARAMETER
// function func(...args) {
//     // console.log(args.length)
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum;
// }
// console.log(func(1, 2, 3, 4, 5))

// -------------------------------------
// HIGH ORDER FUNCTION
// function high(a, b, otherfunc) {
//     return otherfunc(a, b);
// }
// function sum(a, b) {
//     return a + b;
// }
// function mul(a, b) {
//     return a * b;
// }
// console.log(high(2, 4, mul))

// -------------------------------------
// MUTABILTY
// const arr = [1, 2, 4]
// const refArr = arr;
// arr.push(5);
// console.log(arr);

// NON-MUTABILITY
// const str = "divya"
// const newStr = str.toUpperCase();
// console.log(str)
// console.log(newStr)

//------------------------------------------
// CALLBACK EXAMPLE
// function func(callback) {
//     setTimeout(() => {
//         let data = { nam: 'divya', age: 25 }
//         callback(data);
//     }, 2000)
// }
// func(function (data) {
//     console.log(data)
// })
// console.log('callback check');

// ------------------------------------------

// const myPromise = new Promise((resolve, reject) => {
//     let status = true;
//     setTimeout(() => {
//         if (status) {
//             resolve('operation successful')
//         } else {
//             reject('operation failed')
//         }
//     }, 2000)
// })
// myPromise.then(data => console.log(data)).catch(err => console.log(err))

//-------------------------------------
// let fetchData = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts/').then(response => {
//         if (!response.ok) {
//             console.log('error in fetching data')
//         }
//         return response.json()
//     }).then(data => console.log(data)).catch(err => console.log(err))
// }
// fetchData()

// -------------------------------------
// ASYNC/AWAIT
// let fetchData = async () => {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts/');
//         if (!response.ok) {
//             console.log(`Error in fetching Data ${response.status}`)
//         }
//         let data = await response.json();
//         console.log(data)
//     } catch (err) {
//         console.log(err);
//     }
// }
// fetchData();

// ---------------------------------------
// FILTER   // return an array
// const arr = [2, 3, 4, 5, 1, 4, 6]
// const arr2 = arr.filter(ele => ele > 3)
// console.log(arr2)

// -------------------------------------
// CALLBACK FUNC
// function fetchDataFromServer(callback) {
//     // Simulate asynchronous data fetching from a server
//     setTimeout(function () {
//         const data = { message: "Hello, world!" };
//         callback(data); // Execute the callback function with the retrieved data
//     }, 1000);
// }
// function processData(data) {
//     console.log(data.message);
// }
// fetchDataFromServer(processData);
// console.log("gaurav")

// -------------------------------------







//--------Check if a number is prime.------------------//
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   console.log(isPrime(17)); // Output: true

// --------------------------------------
// Check if two strings are anagrams//
//  (contain the same characters in a different order).//
// function areAnagrams(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }

// console.log(areAnagrams("listen", "silent")); // Output: true

// --------------------------------
// Converting numbers to their squares using mapFunction
// const numbers = [1, 2, 3, 4];
// const squaredArray = Array.from(numbers, num => num * num);

// console.log(squaredArray); // Output: [1, 4, 9, 16]
// -----------------------------
// Currying using Closure:
// function multiply(x) {
//     return function (y) {
//       return x * y;
//     };
//   }

//   console.log(multiply(2)(3)); // Output: 24
// ------
// function add(x) {
//     return function(y) {
//       return x + y;
//     };
//   }

//   const add5 = add(5);
//   console.log(add5(3)); // Output: 8
//   console.log(add5(7)); // Output: 12

// ------------------------------
// function syncFunction(callback) {
//     console.log("Doing something before the callback");
//     callback();
//     console.log("Doing something after the callback");
//   }
//   syncFunction(function () {
//     console.log("This is a synchronous callback");
//   });
// ---------------------------------
// function myDisplayer(some) {
//     console.log(some);
//   }
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
//   myCalculator(5, 5, myDisplayer);
//   console.log('check code flow');

// --------------------------------
// function hasDuplicates(arr) {
//     const uniqueValues = new Set(arr);
//     return arr.length !== uniqueValues.size;
//   }

//   const numbers = [3, 7, 2, 8, 3];
//   console.log(hasDuplicates(numbers)); // Output: true









// ===================================
// Write a JavaScript function that takes two arrays
// as input and returns an array containing the common elements between them.

// function findCommonElements(arr1, arr2) {
//     return arr1.filter(item => arr2.includes(item));
//   }

//   const array1 = [2, 4, 6, 8];
//   const array2 = [1, 2, 3, 6];
//   console.log(findCommonElements(array1, array2)); // Output: [2, 6]

// =====================================
// Write a JavaScript function to count the occurrences of a specific element in an array.
// function countOccurrences(arr, target) {
//     return arr.reduce((count, item) => count + (item === target), 0);
// }

// const numbers = [2, 5, 2, 8, 2, 10];
// console.log(countOccurrences(numbers, 2)); // Output: 3

// function countOccurrences(arr, target) {
//     return arr.filter(val => val === target).length;
// }

// const numbers = [2, 5, 2, 8, 2, 10, 2];
// console.log(countOccurrences(numbers, 2)); // Output: 3

// ===================================
// Write a JavaScript function that removes all falsy values
// (e.g., false, null, 0, "", undefined, and NaN) from an array.

// function removeFalsyValues(arr) {
//     return arr.filter(item => item);
//   }

//   const values = [0, false, '', null, 42, 'hello', undefined];
//   console.log(removeFalsyValues(values)); // Output: [42, 'hello']

// =================================

// Write a JavaScript function that takes an array of strings and
// returns a new array where each string is capitalized.
// function capitalizeArray(arr) {
//     return arr.map(str => str.toUpperCase());
//   }

//   const words = ['apple', 'banana', 'orange'];
//   console.log(capitalizeArray(words)); // Output: ['APPLE', 'BANANA', 'ORANGE']

// ==================================

// Write a JavaScript function that rotates the elements of
//  an array by a given number of positions.
// function rotateArray(arr, positions) {
//     const index = positions % arr.length;
//     return [...arr.slice(index), ...arr.slice(0, index)];
//   }

//   const elements = [1, 2, 3, 4, 5];
//   console.log(rotateArray(elements, 2)); // Output: [4, 5, 1, 2, 3]

// =================================
// Write a JavaScript function to reverse a given string.
// function reverseString(str) {
//     return str.split('').reverse().join('');
//   }

//   const text = 'hello';
//   console.log(reverseString(text)); // Output: 'olleh'

// ================================
// function countVowels(str) {
//     const vowels = 'aeiouAEIOU';
//     let count = 0;
//     for (let char of str) {
//       if (vowels.includes(char)) {
//         count++;
//       }
//     }
//     return count;
//   }

//   const phrase = 'The quick brown fox';
//   console.log(countVowels(phrase)); // Output: 5

// ==================================
// Write a JavaScript function that checks if two strings are
// anagrams (contain the same characters, regardless of order).

// function areAnagrams(str1, str2) {
//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');
//     return sortedStr1 === sortedStr2;
//   }

//   const word1 = 'listen';
//   const word2 = 'silent';
//   console.log(areAnagrams(word1, word2)); // Output: true

// =================================

// Write a JavaScript function that converts a given string to title case
// (capitalize the first letter of each word).
// function toTitleCase(str) {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
//   }

//   const text = 'the quick brown fox';
//   console.log(toTitleCase(text)); // Output: 'The Quick Brown Fox'



// function checkPalidrom(str) {
//     return str === str.split('').reverse().join('');
// }
// console.log(checkPalidrom('racecar'));







// =============================
// Write a JavaScript function that removes duplicate characters from a string.
// function removeDuplicates(str) {
//     return str.split('').filter((char, index, arr) => arr.indexOf(char) === index).join('');
// }

// const text = 'programming';
// console.log(removeDuplicates(text)); // Output: 'progamin'

// ==============================
// Write a JavaScript function that counts the occurrences of a specific character in a string.
// function countCharacterOccurrences(str, char) {
//     return str.split('').filter(c => c === char).length;
// }

// const text = 'programming';
// console.log(countCharacterOccurrences(text, 'm')); // Output: 2

// ==============================

// Write a JavaScript function that finds the longest word in a sentence.
// function findLongestWord(sentence) {
//     const words = sentence.split(' ');
//     let longestWord = '';
//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }

// const text = 'The quick brown fox jumps over the lazy dog';
// console.log(findLongestWord(text)); // Output: 'jumps'

// ===============================

// Write a JavaScript function that capitalizes the first letter of each word in a sentence.
// function capitalizeWords(sentence) {
//     return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

// const text = 'hello world';
// console.log(capitalizeWords(text)); // Output: 'Hello World'

// =======================






