# LeetCode Daily Log

Track your daily practice and progress here.

---

## November 2025

### 2025-11-23 (Saturday) ✅ - DAY 1 COMPLETE!

**Problems Solved**: 1
- ✅ #1 - Two Sum (Easy) - Arrays & Hashing

**Hash Map Practice**: 1/3 exercises completed
- ✅ Exercise 1: Contains Duplicate (solved correctly on first try!)
- ⏳ Exercise 2: First Non-Repeating Character (planned for tomorrow)
- ⏳ Exercise 3: Group Anagrams (planned for tomorrow)

**Time Spent**: ~2-3 hours total
- Two Sum: 5 minutes (initial attempt)
- Learning hash maps: 1 hour
- Hash map practice: 30 minutes

**What I Learned**:
- **Hash Map Basics**: How to use Map in TypeScript (set, get, has, delete)
- **Hash Map Complement Pattern**: Instead of O(n²) nested loops, use hash map for O(1) lookups
- **Set vs Map**: When to use Set (just existence) vs Map (key-value pairs)
- **Testing is crucial**: Always test with multiple cases, not just the first example
- **Read problems carefully**: "ANY two numbers" vs "adjacent numbers"
- **TypeScript execution**: Use `npx tsx` to run .ts files, not `node`

**Challenges**:
- Two Sum initial solution only checked adjacent elements
- Didn't understand hash maps at first - took time to learn the concept
- Needed help running TypeScript files

**Wins Today**: 🎉
- ✅ Set up entire senior engineer roadmap repository
- ✅ Created comprehensive progress tracking system
- ✅ Solved first LeetCode problem
- ✅ Learned hash maps from scratch
- ✅ Applied hash map pattern successfully (Contains Duplicate)
- ✅ Asked good questions and learned from mistakes
- ✅ Built strong foundation for Day 2

**Key Insights**:
- Making mistakes is part of learning (Two Sum bug taught me a lot)
- Understanding fundamentals (hash maps) is more important than rushing through problems
- The "complement pattern" will be useful for many problems
- Keep this terminal open to maintain context, or update files before closing

**Tomorrow's Plan**:
- [ ] Complete Hash Map Exercise 2 (First Non-Repeating Character)
- [ ] Complete Hash Map Exercise 3 (Group Anagrams)
- [ ] Re-solve Two Sum from scratch using hash map (no peeking!)
- [ ] Solve LeetCode #217 - Contains Duplicate (official problem)
- [ ] Consider setting up GitHub repo

**Notes**:
- First day of the journey! 🚀
- Learned that I need to strengthen fundamentals, not just rush through problems
- Hash maps are CRITICAL - will appear in 40% of problems
- Ready to continue tomorrow with exercises 2 & 3

---

### 2025-11-24 (Sunday) ✅ - DAY 2 COMPLETE!

**Problems Solved**: 3 (exceeded daily goal of 2!)
- ✅ #387 - First Unique Character in a String (Easy) - Hash Maps
- ✅ #49 - Group Anagrams (Easy/Medium) - Hash Maps & String Manipulation
- ✅ #1 - Two Sum (Easy) - Clean re-solve from scratch

**Hash Map Practice**: 3/3 exercises completed ✅
- ✅ Exercise 1: Contains Duplicate (Day 1)
- ✅ Exercise 2: First Non-Repeating Character (solved, learned about return types)
- ✅ Exercise 3: Group Anagrams (learned sorting pattern with help)

**Time Spent**: ~2 hours
- First Non-Repeating: 20 minutes (learned index vs character return)
- Group Anagrams: 30 minutes (got stuck, checked solution - learned the pattern)
- Two Sum re-solve: 20 minutes (clean implementation)
- Big O learning: 20 minutes
- Interview approach discussion: 20 minutes
- AWS setup: 10 minutes

**What I Learned**:
- **Return Types Matter**: LeetCode problems have specific return types (index vs value vs boolean)
- **String Manipulation Pattern**: `word.split('').sort().join('')` for sorting letters
- **Map Value Storage**: Store indices, not just values, when problem asks for positions
- **TypeScript Non-null Assertion**: Use `!` after `map.get()` when you've verified with `has()`
- **Big O Complexity**:
  - Sequential loops: O(n) + O(n) = O(n) (add and drop constants)
  - Nested loops: O(n) × O(n) = O(n²) (multiply)
- **Interview Approach**: Always start with brute force, then optimize
  1. Brute Force (O(n²))
  2. Better (two-pass O(n))
  3. Optimal (one-pass O(n))
- **Problem-Solving Philosophy**: Understanding > Speed, it's okay to check solutions

**Challenges**:
- First Non-Repeating: Wrong order in frequency counter `(seen.get(letter) || 0) + 1` vs `seen.get(letter) + 1 || 1`
- First Non-Repeating: LeetCode wanted index, not character
- Group Anagrams: Got stuck on the sorting approach, needed to see solution
- Two Sum: TypeScript typing with `map.get()` returning `number | undefined`
- AWS: Account activation takes 24 hours, couldn't complete full setup

**Wins Today**: 🎉
- ✅ Completed all 3 hash map practice exercises
- ✅ Exceeded daily LeetCode goal (3 instead of 2)
- ✅ Two Sum clean re-solve successful (mastered the pattern!)
- ✅ Learned Big O complexity fundamentals
- ✅ Learned interview progression approach (brute force → optimal)
- ✅ Added mandatory problem-solving approach to README
- ✅ Initiated AWS account setup
- ✅ Maintained learning consistency (Day 2 streak!)

**Key Insights**:
- Checking solutions is part of learning, not cheating - understand the pattern!
- Hash map patterns are becoming clearer with each problem
- TypeScript's type system helps catch bugs early
- Sequential vs nested loops - fundamental for complexity analysis
- Interview approach matters: showing progression is better than memorizing optimal solutions
- Consistency is key: 1-1.5 hours daily is sustainable

**Tomorrow's Plan** (Wednesday):
- [ ] LeetCode: 2 Easy problems (Arrays/Strings focus)
- [ ] Check AWS account activation status
- [ ] Set up AWS billing alerts (FIRST PRIORITY when active)
- [ ] Set up AWS MFA
- [ ] Explore AWS console (EC2, S3, RDS, Lambda)
- [ ] Start AWS Cloud Practitioner Module 1 (Cloud Concepts)

**Notes**:
- Day 2 complete - exceeded goals! 💪
- Hash map foundation is solid now
- Ready to tackle more patterns
- AWS journey begins tomorrow once account is active
- Learning that it's okay to struggle and seek help

---

## Template for Daily Entries

```markdown
### YYYY-MM-DD (Day of Week) ✅/❌

**Problems Solved**: X
- ✅/❌ #[num] - [Problem Name] ([Difficulty]) - [Topic]

**Time Spent**: X minutes/hours

**Difficulty**:
- How hard was it? [1-10]
- Did you need hints? [Yes/No]
- Did you look at the solution? [Yes/No]

**What I Learned**:
-

**Challenges**:
-

**Notes**:
-
```

---

## Weekly Summary Template

```markdown
### Week of [Start Date] - [End Date]

**Problems Solved**: X
**Streak**: X days

**Breakdown**:
- Easy: X
- Medium: X
- Hard: X

**Topics Covered**:
- Arrays: X problems
- Hash Maps: X problems

**Key Learnings**:
-

**Next Week Focus**:
-
```
