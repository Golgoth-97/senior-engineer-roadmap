/**
 * LeetCode #1929 - Concatenation of Array
 * Difficulty: Easy
 * Topic: Arrays & Hashing
 *
 * Problem: Given an integer array nums of length n, you want to create an array ans
 * of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
 * Specifically, ans is the concatenation of two nums arrays.
 *
 * Date Solved: 2025-11-26
 * Time Complexity: ?
 * Space Complexity: ?
 *
 * Approach: ?
 */

// STEP 1: Brute Force / Simple Solution
function getConcatenation(nums: number[]): number[] {
    // Your solution here
    const ans = [];
    for(let i = 0; i < nums.length; i++){
        ans[i] = nums[i];
        ans[i + nums.length] = nums[i]
        console.log('ans',ans)
    }
    return ans;

}

// Test cases
console.log(getConcatenation([1,2,1])); // Expected: [1,2,1,1,2,1]
console.log(getConcatenation([1,3,2,1])); // Expected: [1,3,2,1,1,3,2,1]
