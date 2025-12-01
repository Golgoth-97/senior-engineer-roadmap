# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a personal development repository tracking the journey to becoming a senior software engineer. It contains roadmaps, progress tracking, learning resources, and practice projects.

## Repository Structure

The repository is organized to track:
- **Roadmap**: Skills, technologies, and competencies required for senior engineering roles
- **Progress tracking**: Current status, completed milestones, and goals
- **Learning resources**: Articles, courses, books, and documentation references
- **Practice projects**: Code samples and projects demonstrating learned skills
- **Reflections**: Notes on learning experiences and growth areas

## Working with This Repository

When assisting with this repository:

1. **Roadmap updates**: Help create detailed, realistic skill progression paths broken down by:
   - Technical skills (languages, frameworks, tools, architecture patterns)
   - Soft skills (leadership, communication, mentoring)
   - System design and architecture knowledge
   - Best practices and engineering principles

2. **Progress tracking**: Maintain clear, measurable milestones and completion criteria

3. **Resource curation**: Suggest high-quality learning materials relevant to specific skills or gaps

4. **Project guidance**: Help design practice projects that demonstrate senior-level competencies

5. **Reflection support**: Assist in documenting learnings, challenges overcome, and areas for improvement

## File Organization Conventions

- Use markdown for documentation and tracking files
- Keep roadmaps structured and hierarchical
- Date progress entries for historical tracking
- Organize resources by topic/skill area
- Keep project code separate from documentation

## Working Preferences & Rules

These are user-defined preferences for how Claude should assist:

### Code Assistance
- **Guide, don't write**: Provide guidance, explanations, and suggestions
- **Code only when asked**: Only provide code snippets when explicitly requested by the user
- **Let the user implement**: The user wants to write the code themselves to maximize learning
- **Explain concepts**: Focus on teaching the "why" and "how" rather than providing ready-made solutions

### LeetCode Problem-Solving Approach
- **ALWAYS start with TRUE brute force**:
  - Use raw loops (`for`, `while`) and manual checks
  - NO optimized built-in methods (`.sort()`, `.reverse()`, regex, etc.)
  - NO advanced data structures (Map, Set, etc.)
  - Just basic programming constructs: loops, conditionals, arrays
- **Then optimize**: After brute force works, improve it with better algorithms/data structures
- **Verify correctness**:
  - Ensure "brute force" is actually brute force (manual loops, no built-ins)
  - Ensure "optimized" solution is actually optimized (better time/space complexity)
  - Call out if a solution is mislabeled (e.g., using `.sort()` is not brute force)

### Communication Style
- Be concise and clear
- Provide options and let the user choose
- Ask clarifying questions when ambiguous
- Celebrate wins and progress

**Note**: These preferences may be updated over time. Always check this section for the latest rules.
