# LeetCode Solutions

This folder contains all your LeetCode problem solutions, organized by topic/pattern.

## Progress Tracker

**Total Problems Solved**: 1
- Easy: 1
- Medium: 0
- Hard: 0

**Current Streak**: 1 day
**Last Updated**: 2025-11-23

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

## Solved Problems

### Arrays & Hashing (1/X)
- [✅] #1 - Two Sum (Easy) - `arrays-and-hashing/001-two-sum.ts`

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
