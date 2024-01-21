// =======================================================================//
//{1}. Given an array A of positive integers. Your task is to find the leaders in the array.
//  An element of array is leader if it is greater than or equal to all the elements to its
// right side. The rightmost element is always a leader.
// n = 6
// A[] = {16,17,4,3,5,2}
// Output: 17 5 2
// -----------------------------------------------------------------------//
// function findLeaders(arr) {
//     const n = arr.length;
//     let maxRight = arr[n - 1];
//     const leaders = [maxRight];

//     for (let i = n - 2; i >= 0; i--) {
//         if (arr[i] >= maxRight) {
//             maxRight = arr[i];
//             leaders.push(maxRight); // leaders.unshift(maxRight)
//         }
//     }

//     return leaders.reverse(); // return leaders;
// }

// const A = [16, 17, 4, 3, 5, 2];
// const result = findLeaders(A);
// console.log(result); // Output: [17, 5, 2]

// ========================================================================//
// {2}.Given an array A of n positive numbers. The task is to find the first equilibrium point
//  in an array. Equilibrium point in an array is a position such that the sum of elements
// beforeit is equal to the sum of elements after it.
// Note: Return equilibrium point in 1-based indexing. Return -1 if no such point exists.
// n = 5
// A[] = {1,3,5,2,2}
// Output: 3
// Explanation:equilibrium point is at position 3 as sum of elements before it (1+3) = sum
//  of elements after it (2+2).

// ----------------------------------------------------------------------//

// function findEquilibrium(arr) {
//     let n = arr.length;
//     let totalSum = 0;
//     for (let i = 0; i < n; i++) {
//         totalSum += arr[i];
//     }
//     let leftSum = 0;
//     for (let i = 0; i < n; i++) {
//         totalSum -= arr[i];
//         if (totalSum === leftSum) return i + 1; // returning 1-based index
//         leftSum += arr[i];
//     }
//     return -1;
// }
// const A = [1, 3, 5, 2, 2];
// const result = findEquilibrium(A);
// console.log(result); // Output: 3

// ========================================================================//

// console.log("script execution")

//------------------------------Memoization--------------------------------//
// Memoization is an optimization technique used in JS for speed up the execution of a function
// by caching its results based on the input parameters.  The basic idea is to store the results
// of expensive function calls and return the cached result when the same inputs occur again.
//  This helps to avoid redundant computations and improve performance, especially in scenarios
//   where the same computation may be repeated with the same inputs.

// =================Example 1 ====================//
// let sum = 0;
// let sumCalc = (n) => {
//   for (let i = 0; i < n; i++) {
//     sum += i;
//   }
//   return sum;
// };

// let memoizeFunction = (callbackFn) => {
//   let cache = {}; //{'5' : 15 , '3':6}
//   return function (...args) {
//     console.log(cache);
//     let n = args[0];
//     if (n in cache) {
//         console.log("cache");
//       return cache[n];
//     } else {
//       //computation
//       console.log("computation");
//       let result = callbackFn(n);
//       cache[n] = result;
//       return result;
//     }
//   };
// };

// console.time();
// const cacheFunction =  memoizeFunction(sumCalc);
// console.log(cacheFunction(100000));
// console.timeEnd();

// //now call function again with the same inputs//
// console.time();
// console.log(cacheFunction(100000));
// console.timeEnd();

//==================Example 2=====================//
// const memoizedFactorial = function () {
//   const cache = {};

//   function factorial(n) {
//     if (n <= 1) {
//       return 1;
//     }
//     if (cache[n]) {
//       // Return cached result if available
//       console.log("cache");
//       return cache[n];
//     } else {
//       // Calculate and cache the result for future use
//       console.log("computation done")
//       cache[n] = n * factorial(n - 1);
//       return cache[n];
//     }
//   }

//   return factorial;
// };

// console.time();
// const factorialFunction = memoizedFactorial();
// console.log(factorialFunction(10));
// console.timeEnd();

// console.time();
// console.log(factorialFunction(10));
// console.timeEnd();
