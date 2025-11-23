/**
 * LeetCode #1 - Two Sum
 * Difficulty: Easy
 * Topic: Arrays & Hashing
 *
 * Problem: Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * Date Solved: 2025-11-23
 */

function twoSum(nums: number[], target: number): number[] {
    for(let i = 0;i < nums.length;i++){
        if(nums[i] + nums[i+1] === target){
            return [i,i+1];
        }
    }
}

// Test cases
console.log(twoSum([2,7,11,15], 9)); // Expected: [0,1]
console.log(twoSum([3,2,4], 6));     // Expected: [1,2]
console.log(twoSum([3,3], 6));       // Expected: [0,1]
