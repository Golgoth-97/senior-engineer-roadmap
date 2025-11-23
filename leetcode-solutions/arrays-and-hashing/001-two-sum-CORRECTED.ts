/**
 * LeetCode #1 - Two Sum
 * Difficulty: Easy
 * Topic: Arrays & Hashing
 *
 * Problem: Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * Date Solved: 2025-11-23
 * Time Complexity: O(n) - single pass through array
 * Space Complexity: O(n) - hash map storage
 *
 * Approach: Use hash map to store seen numbers and their indices.
 * For each number, calculate the complement (target - current number)
 * and check if we've seen it before. This avoids nested loops.
 *
 * Key Learning: "Complement Pattern" - instead of checking all pairs (O(n²)),
 * use a hash map to check if complement exists in O(1) time.
 */

// ========== OPTIMAL SOLUTION (O(n)) ==========
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>(); // number -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if complement exists in our map
        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }

        // Store current number and its index
        map.set(nums[i], i);
    }

    return []; // No solution found (won't happen per constraints)
}

// ========== BRUTE FORCE SOLUTION (O(n²)) ==========
function twoSumBruteForce(nums: number[], target: number): number[] {
    // Check every possible pair
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// ========== MY FIRST ATTEMPT (INCORRECT) ==========
// function twoSum(nums: number[], target: number): number[] {
//     for(let i = 0;i < nums.length;i++){
//         if(nums[i] + nums[i+1] === target){
//             return [i,i+1];
//         }
//     }
// }
//
// MISTAKE: Only checks adjacent elements!
// Two Sum asks for ANY two numbers, not just neighbors.

// Test cases
console.log("Optimal Solution:");
console.log(twoSum([2,7,11,15], 9));  // [0,1] ✅
console.log(twoSum([3,2,4], 6));      // [1,2] ✅
console.log(twoSum([3,3], 6));        // [0,1] ✅
console.log(twoSum([3,2,3], 6));      // [0,2] ✅

console.log("\nBrute Force Solution:");
console.log(twoSumBruteForce([2,7,11,15], 9));  // [0,1] ✅
console.log(twoSumBruteForce([3,2,4], 6));      // [1,2] ✅

/**
 * WALKTHROUGH EXAMPLE:
 *
 * Input: nums = [3, 2, 4], target = 6
 *
 * Step 1: i=0, nums[0]=3
 *   - complement = 6 - 3 = 3
 *   - Is 3 in map? No
 *   - map.set(3, 0) → map = {3: 0}
 *
 * Step 2: i=1, nums[1]=2
 *   - complement = 6 - 2 = 4
 *   - Is 4 in map? No
 *   - map.set(2, 1) → map = {3: 0, 2: 1}
 *
 * Step 3: i=2, nums[2]=4
 *   - complement = 6 - 4 = 2
 *   - Is 2 in map? YES! at index 1
 *   - return [1, 2] ✅
 */

/**
 * PATTERN LEARNED: Hash Map Complement Pattern
 *
 * Use this pattern when:
 * - Finding pairs that sum to target
 * - Looking for complements/differences
 * - Need O(1) lookup time
 *
 * Template:
 * 1. Create hash map
 * 2. For each element:
 *    a. Calculate complement
 *    b. Check if complement exists in map
 *    c. If yes: use it
 *    d. If no: store current element
 *
 * Other problems using this pattern:
 * - Two Sum II
 * - 3Sum (variation)
 * - 4Sum (variation)
 * - Subarray Sum Equals K
 */
