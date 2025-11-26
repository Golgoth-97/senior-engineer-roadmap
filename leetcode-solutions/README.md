# LeetCode Solutions

This folder contains all your LeetCode problem solutions, organized by topic/pattern.

## Progress Tracker

**Total Problems Solved**: 7
- Easy: 7
- Medium: 0
- Hard: 0

**Current Streak**: 4 days
**Last Updated**: 2025-11-26

---

## Folder Structure

Solutions are organized by pattern (following NeetCode organization):

- **arrays-and-hashing/** - Array manipulation, hash maps, sets
- **two-pointers/** - Two pointer technique problems
- **stack/** - Stack-based problems
- **binary-search/** - Binary search variations
- **linked-list/** - Linked list problems
- **trees/** - Binary trees, BST problems
- **other/** - Miscellaneous problems

---

## Problem-Solving Approach (MANDATORY)

**ALWAYS follow this progression for every problem:**

### Step 1: Brute Force First (The "Dumb" Version)
- Start with the simplest, most obvious solution
- Use nested loops, basic conditionals - whatever works
- Don't worry about optimization yet
- This shows you understand the problem

### Step 2: Analyze Complexity
- Identify time complexity: O(n²), O(n³), etc.
- Identify space complexity: O(1), O(n), etc.
- Recognize why it's inefficient

### Step 3: Optimize & Iterate
- Ask: "What data structure could help?"
  - Hash Map for O(1) lookups?
  - Set for uniqueness checks?
  - Stack for LIFO operations?
  - Two pointers to avoid nested loops?
- Reduce time complexity: O(n²) → O(n)
- Consider space trade-offs

### Step 4: Reach Optimal Solution
- Can you reduce passes through the data?
- Can you combine steps?
- Is this the best possible complexity?

### Why This Matters:
- **Interviews expect this progression** - showing thought process > perfect answer
- **Builds problem-solving skills** - you learn to recognize patterns
- **Demonstrates understanding** - you know trade-offs, not just memorized solutions

### Example: Two Sum
1. **Brute Force**: Nested loops → O(n²) time, O(1) space
2. **Better**: Two-pass hash map → O(n) time, O(n) space
3. **Optimal**: One-pass hash map → O(n) time, O(n) space, fewer iterations

---

## Solved Problems

### Arrays & Hashing (7/X)
- [✅] #1 - Two Sum (Easy) - `arrays-and-hashing/001-two-sum.ts`
- [✅] #49 - Group Anagrams (Medium) - Hash Maps & String Manipulation
- [✅] #58 - Length of Last Word (Easy) - `arrays-and-hashing/058-length-of-last-word.ts`
- [✅] #217 - Contains Duplicate (Easy) - `arrays-and-hashing/217-contains-duplicate.ts`
- [✅] #242 - Valid Anagram (Easy) - `arrays-and-hashing/242-valid-anagram.ts`
- [✅] #387 - First Unique Character in a String (Easy) - Hash Maps
- [✅] #1929 - Concatenation of Array (Easy) - `arrays-and-hashing/1929-concatenation-of-array.ts`

### Two Pointers (0/X)
- [ ] #125 - Valid Palindrome (Easy)
- [ ] #167 - Two Sum II (Medium)

### Stack (0/X)
- [ ] #20 - Valid Parentheses (Easy)

---

## Naming Convention

Files are named: `[problem-number]-[problem-name].ts`

Example: `001-two-sum.ts`

Each file should include:
```typescript
/**
 * LeetCode #[number] - [Problem Name]
 * Difficulty: Easy/Medium/Hard
 * Topic: [Topic/Pattern]
 *
 * Problem: [Brief description]
 *
 * Date Solved: YYYY-MM-DD
 * Time Complexity: O(?)
 * Space Complexity: O(?)
 *
 * Approach: [Brief explanation of your approach]
 */

// Your solution here

// Test cases
```

---

## Study Notes & Patterns

### Patterns Learned

#### Hash Map Pattern
**When to use**: Need to find pair/complement, or track frequencies

**Template**:
```typescript
function pattern(arr: number[]): returnType {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        // Check if complement exists
        if (map.has(complement)) {
            return result;
        }
        // Store current element
        map.set(arr[i], i);
    }
}
```

**Problems using this**: Two Sum, ...

---

## Review Schedule

Problems to review:
- [ ] Week 1: Review Two Sum
- [ ] Week 2: Review all Week 1 problems
- [ ] Month 1: Review all problems solved

---

## Next Problems to Solve

Following NeetCode roadmap:

**Week 1 Focus** (Arrays & Hashing Easy):
1. [✅] Two Sum
2. [ ] Contains Duplicate (#217)
3. [ ] Valid Anagram (#242)
4. [ ] Concatenation of Array (#1929)

**Week 2 Focus**:
5. [ ] Replace Elements with Greatest Element on Right Side (#1299)
6. [ ] Is Subsequence (#392)
7. [ ] Length of Last Word (#58)

---

## Mistakes & Learnings Log

### Two Sum (2025-11-23)
- **First attempt**: [Document what approach you tried]
- **What I learned**: [Key insights]
- **Time taken**: [How long it took]
- **Needed hints?**: Yes/No

---

## Resources

- **LeetCode**: https://leetcode.com
- **NeetCode**: https://neetcode.io (follow this roadmap)
- **NeetCode YouTube**: Video explanations
- **Visualgo**: https://visualgo.net (visualize algorithms)

---

## Goals

- [ ] Solve 30 Easy problems by end of Quarter 1
- [ ] Understand 5 core patterns
- [ ] Attempt 5 Medium problems
- [ ] Review problems weekly
