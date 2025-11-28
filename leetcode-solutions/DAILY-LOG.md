# LeetCode Daily Log

Track your daily practice and progress here.

---

## November 2025

### 2025-11-23 (Sunday) ✅ - DAY 1 COMPLETE!

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

### 2025-11-24 (Monday) ✅ - DAY 2 COMPLETE!

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

### 2025-11-25 (Tuesday) ✅ - DAY 3 COMPLETE!

**Problems Solved**: 2
- ✅ #217 - Contains Duplicate (Easy) - Arrays & Hashing
- ✅ #242 - Valid Anagram (Easy) - Arrays & Hashing

**Time Spent**: ~2 hours
- Contains Duplicate: 30 minutes (brute force + optimized)
- Valid Anagram: 60 minutes (3 versions: sorting, two maps, single map)
- AWS Module 1: 30-45 minutes
- Complexity analysis learning: 20 minutes

**What I Learned**:
- **Multiple Solution Approaches**: Implementing brute force → optimized for each problem
- **Complexity Deep Dive**:
  - Why sorting is O(n log n): n elements × log n levels of comparisons
  - Sequential loops add: O(n) + O(n) = O(n)
  - Nested loops multiply: O(n) × O(n) = O(n²)
- **Array vs String Comparison**:
  - Arrays compare by reference, not value: `[1,2,3] === [1,2,3]` is false!
  - Need `.join('')` to convert to string for comparison
- **String Methods Mastery**: `.split('').sort().join('')` pattern
- **Space Optimization**: Two maps vs single map approach
- **AWS Cloud Fundamentals**:
  - What is cloud computing
  - Benefits: scalability, cost-efficiency, global reach
  - Service models: IaaS, PaaS, SaaS
  - Completed Module 1 of Cloud Practitioner

**Challenges**:
- Valid Anagram initial attempt: Reversed string instead of checking anagram
- Array comparison bug: Using `===` on arrays doesn't work
- Understanding why sorting dominates complexity (O(n log n))
- Balancing time between LeetCode and AWS learning

**Wins Today**: 🎉
- ✅ Solved 2 LeetCode problems with multiple approaches each
- ✅ Contains Duplicate: Brute force O(n²) + Hash map O(n)
- ✅ Valid Anagram: 3 complete implementations (sorting, two maps, single map)
- ✅ Deep understanding of complexity analysis
- ✅ Completed AWS Cloud Practitioner Module 1
- ✅ Updated learning goals with specific areas (complexity, array methods)
- ✅ Maintained 3-day streak!
- ✅ Following mandatory problem-solving approach (brute force first)

**Key Insights**:
- Multiple approaches teach more than one "perfect" solution
- Understanding WHY an algorithm is O(n log n) is as important as knowing it
- String/array method mastery is critical for interview speed
- AWS learning can happen in parallel with account activation
- Problem-solving approach (brute force → optimal) is becoming natural
- Space-time trade-offs: sometimes using less space is worth considering

**Tomorrow's Plan** (Tuesday):
- [ ] Check AWS account status and configure (PRIORITY!)
- [ ] Set up billing alerts (if active)
- [ ] Set up MFA (if active)
- [ ] Explore AWS Console (EC2, S3, RDS, Lambda)
- [ ] LeetCode: 2 more Easy problems (continue Arrays & Hashing)
- [ ] AWS Cloud Practitioner Module 2
- [ ] Consider: Review Day 1-3 problems to solidify patterns

**Notes**:
- Day 3 complete - strong technical progress! 💪
- Complexity analysis is getting clearer with each problem
- AWS journey officially started (Module 1 done!)
- Multiple solution approach is paying off - deeper understanding
- Ready to configure AWS account tomorrow

---

### 2025-11-26 (Wednesday) ✅ - DAY 4 COMPLETE!

**Problems Solved**: 2
- ✅ #1929 - Concatenation of Array (Easy) - Arrays & Hashing
- ✅ #58 - Length of Last Word (Easy) - String Manipulation

**Time Spent**: ~2 hours total
- LeetCode (lunch break): 30 minutes
- AWS Module 2: 45 minutes
- AWS account setup & security: 30 minutes
- Progress tracking & commits: 15 minutes

**Difficulty**:
- How hard was it? [2/10] - Both very straightforward
- Did you need hints? No - solved both on first try!
- Did you look at the solution? No

**What I Learned**:
- **When NOT to use hash maps**: Concatenation problem doesn't need hash map - direct array manipulation is optimal
- **Hash map recognition**: Learning to identify when hash maps help vs when they add unnecessary complexity
- **String methods mastery**: `trim()`, `split()`, array indexing for string problems
- **Quick wins**: Some problems are simpler than they appear - don't over-engineer
- **Consistency matters**: Solving problems during lunch break maintains streak

**Challenges**:
- Initially thought Concatenation of Array might need hash map (learning when NOT to use patterns)
- None - both problems were straightforward

**Wins Today**: 🎉
- ✅ Solved 2 problems during lunch break
- ✅ Both solved correctly on first attempt
- ✅ Maintained 4-day streak
- ✅ Learning to recognize appropriate data structures
- ✅ Quick, efficient problem-solving

**Key Insights**:
- Not every problem needs advanced patterns - sometimes simple loops are best
- Hash maps are powerful but shouldn't be forced into every solution
- String manipulation with built-in methods is fast and clean
- Short focused sessions (lunch breaks) are effective
- Committing after each achievement creates better progress tracking

**AWS Progress** (Afternoon Session):
- ✅ Completed AWS Cloud Practitioner Module 2
- ✅ Created new AWS account
- ✅ Set up billing alerts (Free Tier + CloudWatch)
- ✅ Created budget to prevent unexpected charges
- ✅ Set up MFA (Multi-Factor Authentication) for security
- ✅ Reviewed AWS Free Tier limits and best practices

**Tomorrow's Plan** (Day 5):
- [ ] Solve #1299 - Replace Elements with Greatest Element on Right Side
- [ ] Solve #392 - Is Subsequence (two pointers introduction!)
- [ ] Optional: Start AWS hands-on practice (launch first EC2 instance)

**Notes**:
- Day 4 complete - balanced day with LeetCode AND AWS! 💪
- Lunch break coding is effective - keeps the streak alive
- Pattern recognition improving (knowing when to use hash maps vs simple loops)
- AWS account properly secured - ready for hands-on practice tomorrow!
- Multiple commits per day = better progress tracking
- Sustainable pace: ~2 hours spread across the day works well

---

### 2025-11-27 (Thursday) 🔄 - DAY 5 IN PROGRESS!

**Problems Solved**: 1
- ✅ #1299 - Replace Elements with Greatest Element on Right Side (Easy) - Arrays

**Time Spent**: ~3 hours (so far)
- EC2 hands-on: 45 minutes
- AWS Module 3: 1 hour
- LeetCode #1299: 30 minutes
- Progress tracking: 15 minutes

**AWS Progress**:
- ✅ Completed AWS Cloud Practitioner Module 3
- ✅ Launched first EC2 instance (t2.micro - Free Tier)
- ✅ Connected via SSH successfully
- ✅ Set up SSH config file for easy access
- ✅ Verified Node.js installed (v18.20.8)
- ✅ Explored Linux commands on remote server
- ✅ Stopped instance properly (saving free tier hours)

**What I Learned**:
- **EC2 Basics**: How to launch virtual servers in the cloud
- **SSH Configuration**: Creating ~/.ssh/config for easier connections
- **Key Management**: Using .pem keys for secure authentication
- **Free Tier Management**: Importance of stopping instances when not in use
- **Right-to-left traversal**: Working backwards through arrays for optimization
- **O(n²) vs O(n)**: Brute force (nested loops) vs optimized (single pass backwards)

**Challenges**:
- Initial SSH permission denied error (fixed with correct key path)

**Wins Today**: 🎉
- ✅ First successful EC2 launch and connection!
- ✅ Practical cloud computing experience
- ✅ SSH config setup for future ease

**Still To Do Today**:
- [ ] Solve #392 - Is Subsequence

**Notes**:
- Day 5 started with AWS focus - hands-on learning is valuable!
- EC2 instance launch was smooth - followed security best practices

---

### 2025-11-28 (Friday) ✅ - DAY 6 COMPLETE!

**Problems Solved**: 1
- ✅ #392 - Is Subsequence (Easy) - Two Pointers

**Time Spent**: ~1 hour
- LeetCode #392: 45 minutes
- Progress tracking: 15 minutes

**What I Learned**:
- **Two Pointers Technique**: Using two index variables to traverse data efficiently
- **Pattern vs Data Structure**: Two pointers is a technique, not a data structure
- **O(n) single pass**: More efficient than nested loops
- **String indexing**: Can access s[i] directly without split()

**Challenges**:
- Understanding when both pointers should move vs just one
- Initial approach didn't maintain order

**Wins Today**: 🎉
- ✅ Learned NEW pattern (two pointers!)
- ✅ Solved with hints, debugged independently
- ✅ 6-day streak maintained!
- ✅ 9 total problems (30% toward quarterly goal!)

**Notes**:
- Two pointers is a fundamental technique for many problems
- Pattern recognition improving

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
