# System Design Practice

System design is crucial for senior engineering roles. This folder contains practice problems, solutions, and notes.

## Classic System Design Problems

Create a separate markdown file for each problem you practice:

### Beginner Level
- [ ] Design a URL shortener
- [ ] Design a pastebin
- [ ] Design a cache system
- [ ] Design a key-value store

### Intermediate Level
- [ ] Design Twitter/X
- [ ] Design Instagram
- [ ] Design a messaging app (WhatsApp/Slack)
- [ ] Design Uber/Lyft
- [ ] Design a ride-sharing service
- [ ] Design a web crawler
- [ ] Design a search autocomplete
- [ ] Design a news feed

### Advanced Level
- [ ] Design YouTube/Netflix
- [ ] Design Google Drive/Dropbox
- [ ] Design a distributed file system
- [ ] Design a rate limiter
- [ ] Design a notification system
- [ ] Design a real-time gaming leaderboard
- [ ] Design a stock exchange

## Design Document Template

For each system design practice, create a file: `design-[system-name].md`

```markdown
# Design: [System Name]

## Requirements

### Functional Requirements
- Requirement 1
- Requirement 2

### Non-Functional Requirements
- Scale: X users, Y requests/sec
- Availability: 99.9%
- Latency: <200ms p95
- Data retention: X years

## Estimation

### Traffic
- Daily active users: X
- Requests per second: Y
- Peak traffic: Z

### Storage
- Data per user: X GB
- Total storage needed: Y TB
- Growth rate: Z% per year

### Bandwidth
- Incoming: X MB/s
- Outgoing: Y MB/s

## High-Level Design

[Diagram or description of main components]

### Core Components
1. Component 1: Purpose
2. Component 2: Purpose
3. Component 3: Purpose

## Database Design

### Schema
```sql
-- Tables and relationships
```

### Database Choice
- Why SQL/NoSQL?
- Which specific database? Why?

## API Design

### Endpoints
```
POST /api/resource
GET /api/resource/:id
PUT /api/resource/:id
DELETE /api/resource/:id
```

## Deep Dive

### Component 1: [Name]
- Detailed design
- Technologies used
- Why this approach?

### Component 2: [Name]
- Detailed design
- Technologies used
- Why this approach?

## Scalability

- How to scale reads?
- How to scale writes?
- Caching strategy
- Load balancing approach
- Database sharding/replication

## Potential Bottlenecks

- Bottleneck 1: Solution
- Bottleneck 2: Solution

## Trade-offs

- Trade-off 1: Why this choice?
- Trade-off 2: Why this choice?

## Follow-up Questions

Questions to think about:
- How to handle X scenario?
- What if we need to add Y feature?
```

## Key Concepts to Master

### Scalability
- Horizontal vs vertical scaling
- Load balancing (Round robin, least connections, consistent hashing)
- Caching strategies (Cache-aside, write-through, write-behind)
- CDN usage
- Database sharding and partitioning

### Reliability
- Replication (master-slave, master-master)
- Failover and redundancy
- Health checks and monitoring

### Performance
- Database indexing
- Query optimization
- Asynchronous processing
- Message queues

### Data
- CAP theorem
- ACID vs BASE
- SQL vs NoSQL trade-offs
- Data consistency patterns

### Communication
- REST vs GraphQL vs gRPC
- WebSockets for real-time
- Polling vs long polling vs SSE

## Resources

Add notes from:
- System design courses
- Articles on specific design patterns
- Real-world architecture blogs
- Your own insights and learnings
