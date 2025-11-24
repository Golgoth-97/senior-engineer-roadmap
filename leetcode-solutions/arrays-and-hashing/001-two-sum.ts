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
    const seen = new Map<number, number>();
    for(let i = 0; i < nums.length; i++){
        const n = target - nums[i];
        if(seen.has(n)){
            return [seen.get(n)!, i];
        } else {
            seen.set(nums[i], i)
        }
    }
    return []
}

// Test cases
console.log(twoSum([2,7,11,15], 9)); // Expected: [0,1]
console.log(twoSum([3,2,4], 6));     // Expected: [1,2]
console.log(twoSum([3,3], 6));       // Expected: [0,1]


// [3,2, 1,3,4]
// Il adaug pe 3
// Vad caca 3 + 2 egal = 6
// Apoi adaug 2
// Vad daca 3+1 egal 6
// vad daca 2+ 1 egal 6
// Adaug 1
// Vad daca 3+ 3 egal 6