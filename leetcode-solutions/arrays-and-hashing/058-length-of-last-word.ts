/**
 * LeetCode #58 - Length of Last Word
 * Difficulty: Easy
 * Topic: String Manipulation
 *
 * Problem: Given a string s consisting of words and spaces, return the length of
 * the last word in the string. A word is a maximal substring consisting of
 * non-space characters only.
 *
 * Date Solved: 2025-11-26
 * Time Complexity: ?
 * Space Complexity: ?
 *
 * Approach: ?
 */

function lengthOfLastWord(s: string): number {
    // Your solution here
    const newString = s.trim().split(' ');
    return newString[newString.length - 1].length;
}

// Test cases
console.log(lengthOfLastWord("Hello World")); // Expected: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Expected: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Expected: 6
