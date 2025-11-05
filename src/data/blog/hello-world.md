---
title: "Building vowlt: Day 1"
description: "We're building vowlt in public - an open source bookmarking app with AI-powered search. Here's why and how we're getting started."
pubDate: 2025-01-15
tags: ["announcement", "open-source", "building-in-public"]
draft: false
---

Today marks the beginning of **vowlt** - an open source bookmarking application with AI-powered categorization and semantic search.

## Why vowlt?

Browser bookmarks are broken. You save hundreds of links, and they disappear into a black hole. No search, no organization, no way to rediscover what you saved.

We're fixing that.

## What makes vowlt different?

1. **AI-Powered Categorization** - Automatically organize bookmarks using OpenAI/Anthropic
2. **Semantic Search** - Find bookmarks by meaning, not just keywords
3. **100% Open Source** - AGPL-3.0 license, self-hostable
4. **Privacy-First** - Your data stays yours

## The tech stack

We're building with modern, proven technologies:

```typescript
// Example: Our content schema
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});
```

**Tech stack:**

- Backend: .NET/C# with PostgreSQL + pgvector
- Frontend: Angular + TypeScript
- AI: OpenAI/Anthropic APIs
- Deployment: Docker containers

What's next?

Over the coming weeks, we'll be documenting our journey:

- Architecture decisions
- Technical challenges
- Product development insights
- Open source strategy

Follow along at <https://vowlt.app> or subscribe to our newsletter.

Let's build something great together.

This is a building-in-public series. Follow our progress on https://github.com/kalonworks/vowlt.
