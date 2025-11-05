---
title: "Building vowlt: Day 1"
description: "We're building vowlt in public - an open source bookmarking app with AI-powered search. Here's why and how we're getting started."
pubDate: 2025-11-05
tags: ["announcement", "open-source", "building-in-public"]
draft: false
---

I have 847 bookmarks in my browser. I can't find any of them.

Last week, I spent 20 minutes looking for an article about PostgreSQL performance tuning that I _knew_ I had saved. I searched my bookmarks folder. I used browser search. I even Googled phrases I remembered from the article. Nothing.

This is ridiculous. We have semantic search, vector databases, and LLMs that can understand context - yet we're still organizing bookmarks with folders like it's 1999.

So I'm building **vowlt** - a bookmarking app that actually helps you find what you saved.

## What is vowlt?

Think of it as your personal search engine, but only for stuff you've explicitly saved. When you bookmark something:

1. **AI categorizes it automatically** - No manual folder organization
2. **Content gets embedded** - Semantic search that understands meaning
3. **Search actually works** - Find things by describing what you remember

It's open source (AGPL-3.0), self-hostable, and built for people who save a lot of links.

## How it works

Here's the core data model:

```typescript
interface Bookmark {
  id: string;
  url: string;
  title: string;
  description?: string;
  tags: string[];
  aiCategories: string[]; // Auto-generated
  embedding: number[]; // For semantic search
  createdAt: Date;
}
```

Every bookmark gets:

- Extracted text content and metadata
- Vector embedding via OpenAI/Anthropic
- Stored in PostgreSQL with pgvector for fast similarity search

Search queries also get embedded, so you can search by meaning: "that PostgreSQL optimization article" will find it even if those exact words weren't in the title.

## Tech stack

- **Backend**: .NET/C# with PostgreSQL + pgvector
- **Frontend**: Angular + TypeScript
- **AI**: OpenAI/Anthropic APIs
- **Deployment**: Docker containers

Why this stack? It's what I know, it's proven, and I can ship fast.

## What's next?

I'm building this in public. Over the coming weeks, I'll be sharing:

- Architecture decisions and tradeoffs
- Technical challenges (there will be many)
- Performance optimizations
- Open source strategy

This is Day 1. The first commit is pushed. The landing page is live.

If you're tired of losing your bookmarks too, follow along at [vowlt.app](https://vowlt.app) or subscribe to the newsletter below.

Let's fix bookmarks.

---

_This is a building-in-public series. Follow our progress on [GitHub](https://github.com/kalonworks/vowlt)._
