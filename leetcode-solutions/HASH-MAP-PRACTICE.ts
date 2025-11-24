 /**
 * Hash Map Practice Exercises
 *
 * Complete these exercises to master Map in TypeScript
 * Try to solve without looking at solutions first!
 */

// ========== EXERCISE 1: Contains Duplicate ==========
/**
 * Given an array of numbers, return true if any number appears twice.
 * Example: [1,2,3,1] => true
 * Example: [1,2,3,4] => false
 *
 * Hint: Use a Map to track numbers you've seen
 */
function containsDuplicate(nums: number[]): boolean {
    const numberMap = new Map();
    for(let i = 0; i < nums.length; i++){
        if(numberMap.has(nums[i])){
            return true;
        } else {
            numberMap.set(nums[i], 1)
        }
    }
    return false;
}
console.log(containsDuplicate([1,2,3,1]));

// Test cases
console.log("Exercise 1 - Contains Duplicate:");
console.log(containsDuplicate([1,2,3,1]));     // Should be true
console.log(containsDuplicate([1,2,3,4]));     // Should be false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // Should be true

// ========== EXERCISE 2: First Non-Repeating Character ==========
/**
 * Find the first character that appears only once in a string
 * Example: "leetcode" => "l"
 * Example: "loveleetcode" => "v"
 *
 * Hint:
 * 1. Count frequency of each character (Map)
 * 2. Loop through string again, return first with count = 1
 */
function firstUniqChar(s: string): string | null {
    // TODO: Your code here
    // Step 1: Count frequencies
    // Step 2: Find first with count = 1
    const seen = new Map<string, number>();
    for(const letter of s){
        seen.set(letter, (seen.get(letter) || 0) + 1);
    }
    for(const letter of s){
        if(seen.get(letter) === 1){
            return letter;
        }
    }
    return null;
}

// Test cases
console.log("\nExercise 2 - First Non-Repeating:");
console.log(firstUniqChar("leetcode"));      // "l"
console.log(firstUniqChar("loveleetcode"));  // "v"
console.log(firstUniqChar("aabb"));          // null

// ========== EXERCISE 3: Group Anagrams ==========
/**
 * Group words that are anagrams of each other
 * Example: ["eat","tea","tan","ate","nat","bat"]
 * => [["eat","tea","ate"], ["tan","nat"], ["bat"]]
 *
 * Hint: Sort each word's letters as a key
 * "eat" sorted => "aet"
 * "tea" sorted => "aet" (same key!)
 */
function groupAnagrams(words: string[]): string[][] {
    // TODO: Your code here
    // 1. Create Map<string, string[]>
    // 2. For each word:
    //    - Sort its letters to create key
    //    - Add word to map[key]
    // 3. Return all values from map
    const order = new Map<string, string[]>();
    for(const word of words){
        order.set(word, [word.split('').sort().join('')])
    }
    

    return [];
}

// Test case
console.log("\nExercise 3 - Group Anagrams:");
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// Should group: [["eat","tea","ate"], ["tan","nat"], ["bat"]]

// ========== SOLUTIONS (Don't peek until you try!) ==========

function containsDuplicate_SOLUTION(nums: number[]): boolean {
    const seen = new Map<number, boolean>();

    for (const num of nums) {
        if (seen.has(num)) {
            return true;  // Found duplicate!
        }
        seen.set(num, true);
    }

    return false;  // No duplicates
}

function firstUniqChar_SOLUTION(s: string): string | null {
    // Step 1: Count frequencies
    const freq = new Map<string, number>();
    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    // Step 2: Find first with count = 1
    for (const char of s) {
        if (freq.get(char) === 1) {
            return char;
        }
    }

    return null;
}

function groupAnagrams_SOLUTION(words: string[]): string[][] {
    const groups = new Map<string, string[]>();

    for (const word of words) {
        // Sort letters to create key
        const key = word.split('').sort().join('');

        // Add word to group
        if (!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key)!.push(word);
    }

    // Return all groups
    return Array.from(groups.values());
}

/**
 * HASH MAP CHEAT SHEET
 *
 * Create:     const map = new Map<KeyType, ValueType>();
 * Add/Update: map.set(key, value);
 * Get:        map.get(key);  // returns value or undefined
 * Check:      map.has(key);  // returns true/false
 * Delete:     map.delete(key);
 * Size:       map.size;
 * Clear:      map.clear();
 *
 * Iterate:
 * for (const [key, value] of map) { ... }
 * for (const key of map.keys()) { ... }
 * for (const value of map.values()) { ... }
 *
 * Convert to array: Array.from(map.values())
 *
 * Common Pattern - Frequency Counter:
 * map.set(key, (map.get(key) || 0) + 1);
 */
