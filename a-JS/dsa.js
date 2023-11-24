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


