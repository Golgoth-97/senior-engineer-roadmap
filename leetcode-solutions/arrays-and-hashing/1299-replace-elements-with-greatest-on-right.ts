/**
 * LeetCode #1299 - Replace Elements with Greatest Element on Right Side
 * Difficulty: Easy
 * Topic: Arrays & Hashing
 *
 * Problem: Given an array arr, replace every element in that array with the greatest
 * element among the elements to its right, and replace the last element with -1.
 *
 * After doing so, return the array.
 *
 * Date Solved: 2025-11-27
 * Time Complexity: ?
 * Space Complexity: ?
 *
 * Approach: ?
 */

function brutForceReplaceElements(arr: number[]): number[] {
    // Your solution here
    const newArr = [];
      for(let i = 0; i < arr.length; i++){
          let max = -1; // Initialize to -1 (or 0)
          for(let j = i + 1; j < arr.length; j++){
              if(arr[j] > max){
                  max = arr[j];
              }
          }
          newArr.push(max);
      }
      return newArr;
}

function replaceElements(arr: number[]): number[] {
    // Your solution here
    let max = -1;

      // Work backwards (right to left)
      for(let i = arr.length - 1; i >= 0; i--){
          const current = arr[i];
          arr[i] = max;           // Replace with max from right
          max = Math.max(max, current); // Update max
      }

      return arr;
}

// Test cases
console.log(brutForceReplaceElements([17,18,5,4,6,1])); // Expected: [18,6,6,6,1,-1]
console.log(brutForceReplaceElements([400])); // Expected: [-1]
