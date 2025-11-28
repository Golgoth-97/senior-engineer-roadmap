/**
 * LeetCode #392 - Is Subsequence
 * Difficulty: Easy
 * Topic: Two Pointers
 *
 * Problem: Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 *
 * A subsequence of a string is a new string that is formed from the original string by deleting
 * some (can be none) of the characters without disturbing the relative positions of the remaining
 * characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 *
 * Date Solved: 2025-11-28
 * Time Complexity: ?
 * Space Complexity: ?
 *
 * Approach: ?
 */

function brutForceIsSubsequence(s: string, t: string): boolean {
    // Your solution here
    const newS = s.split('');
    const newT = t.split('');
    let newPosition = 0

    for(let i = 0; i < newS.length; i++){
        let hasI = false;
        for(let j = newPosition; j < newT.length; j++){
            if(newS[i] === newT[j]){
                hasI = true
                newPosition = j + 1;
                break;
            }
        }
        if(!hasI){
            return false
        }
    }
    return true;
}

function isSubsequence(s: string, t: string): boolean {
    let i = 0, j = 0;
    while (j < t.length) {
        if(s[i] === t[j]){
            i++;
            j++;
        } else {
            j++;
        }
    }
    if(i === s.length){
        return true;
    } else {
        return false;
    }
}

// Test cases
console.log(isSubsequence("abc", "ahbgdc")); // Expected: true
console.log(isSubsequence("axc", "ahbgdc")); // Expected: false
console.log(isSubsequence("", "ahbgdc"));    // Expected: true (empty string is always subsequence)
console.log(isSubsequence("abc", ""));       // Expected: false
