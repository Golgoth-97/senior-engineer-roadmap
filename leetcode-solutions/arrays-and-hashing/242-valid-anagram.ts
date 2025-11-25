function brutForceIsAnagram(s: string, t: string): boolean {
    if(s.length !== t.length){
        return false;
    }
    const firstWord = s.split('').sort().join('');
    const secondWord = t.split('').sort().join('');
    if(firstWord === secondWord){
        return true
    }

    return false;
};

function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length){
        return false;
    }
    const firstWord = new Map<string, number>();
    const secondWord = new Map<string, number>();

    for(let i = 0; i < s.length; i++){
        firstWord.set(s[i], (firstWord.get(s[i]) || 0) + 1)
        secondWord.set(t[i], (secondWord.get(t[i]) || 0) + 1)
    }
    for(let i = 0; i < t.length; i++){
       if(firstWord.get(s[i]) !== secondWord.get(s[i])){
        return false;
       }
    }

    return true;
};

// ========== OPTIMIZED: Single Map Approach (Best) ==========
/**
 * Time: O(n) - two passes through strings
 * Space: O(n) - only one map (half the space of two-map approach)
 *
 * Strategy:
 * 1. Build frequency map for string s
 * 2. Decrement frequencies while iterating through string t
 * 3. If any character doesn't exist or goes negative, not an anagram
 */
function isAnagramOptimized(s: string, t: string): boolean {
    if(s.length !== t.length) return false;

    const map = new Map<string, number>();

    // Build frequency map for s
    for(const char of s){
        map.set(char, (map.get(char) || 0) + 1);
    }

    // Decrement for each char in t
    for(const char of t){
        if(!map.has(char)) return false;  // char doesn't exist in s
        const count = map.get(char)! - 1;
        if(count < 0) return false;  // more of this char in t than s
        map.set(char, count);
    }

    return true;
}

// Test cases
console.log("\nBrute Force (O(n log n)):");
console.log(brutForceIsAnagram('abc','cba'));       // true
console.log(brutForceIsAnagram('listen','silent')); // true
console.log(brutForceIsAnagram('rat','car'));       // false

console.log("\nTwo Maps (O(n)):");
console.log(isAnagram('abc','cba'));       // true
console.log(isAnagram('listen','silent')); // true
console.log(isAnagram('rat','car'));       // false

console.log("\nSingle Map Optimized (O(n), less space):");
console.log(isAnagramOptimized('abc','cba'));       // true
console.log(isAnagramOptimized('listen','silent')); // true
console.log(isAnagramOptimized('rat','car'));       // false