/**
 * LeetCode #125 - Valid Palindrome
 * Difficulty: Easy
 * Topic: Two Pointers, String Manipulation
 *
 * Problem: A phrase is a palindrome if, after converting all uppercase letters into
 * lowercase letters and removing all non-alphanumeric characters, it reads the same
 * forward and backward. Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Examples:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 *
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 *
 * Input: s = " "
 * Output: true
 * Explanation: After removing non-alphanumeric characters, s is an empty string "".
 * Since an empty string reads the same forward and backward, it is a palindrome.
 *
 * Date Solved: 2025-11-29
 *
 * Brute Force:
 * Time Complexity: O(n) - scan string multiple times with built-in methods
 * Space Complexity: O(n) - create cleaned and reversed strings
 * Performance: 97.8% on LeetCode (built-in methods are highly optimized!)
 *
 * Two Pointers:
 * Time Complexity: O(n) - single pass through string
 * Space Complexity: O(1) - only two pointer variables
 * Performance: 15% on LeetCode (function call overhead, but better for large inputs)
 *
 * Approach: Implemented both solutions. Brute force uses regex + built-in methods (faster in practice).
 * Two pointers compares from both ends (better space complexity, but slower due to overhead).
 * Key learning: Big O isn't everything - built-in optimized methods often beat "optimal" algorithms!
 */

// TODO: Implement brute force solution first
function bruteForceIsPalindrome(s: string): boolean {
    // Hint: Clean the string first (lowercase + remove non-alphanumeric)
    // Then compare the string with its reverse

    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reverseCleaned = cleaned.split('').reverse().join('');

    if(cleaned === reverseCleaned){
        return true;
    }
    return false;
}

function isAlphanumeric(char: string): boolean {
      return /^[a-z0-9]$/i.test(char);
}
// TODO: Implement optimized two-pointer solution
function isPalindrome(s: string): boolean {
    // Hint: Use two pointers (left and right)
    // Skip non-alphanumeric characters
    // Compare characters from both ends moving inward
    let left = 0; 
    let right = s.length - 1;
    s = s.toLowerCase();
    while(left < right){
        if(s[left] !== s[right] && isAlphanumeric(s[left]) && isAlphanumeric(s[right])){
            return false;
        } else if(isAlphanumeric(s[left]) && isAlphanumeric(s[right])) {
            left++;
            right--;
        } else if(isAlphanumeric(s[left]) && !isAlphanumeric(s[right])) {
            right--;
        } else if(!isAlphanumeric(s[left]) && isAlphanumeric(s[right])) {
            left++;
        } else if(!isAlphanumeric(s[left]) && !isAlphanumeric(s[right])) {
            left++;
            right--;
        }
    }
    return true;
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car"));                      // Expected: false
console.log(isPalindrome(" "));                               // Expected: true
console.log(isPalindrome("ab_a"));                            // Expected: true
console.log(isPalindrome("0P"));                              // Expected: false
console.log(isPalindrome(".,."));

// Helper: Check if character is alphanumeric
// You might need this helper function:
// function isAlphanumeric(char: string): boolean {
//     return /^[a-z0-9]$/i.test(char);
// }
