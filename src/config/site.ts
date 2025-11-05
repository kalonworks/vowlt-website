// Site-wide configuration
// Centralizes metadata, URLs, and content strings for easy maintenance

export const SITE_CONFIG = {
  name: "vowlt",
  url: "https://vowlt.app",
  title: "vowlt - Your Personal Search Engine Built from Bookmarks",
  description:
    "Open source bookmarking with AI-powered categorization and semantic search. Self-host or use our hosted service.",

  author: {
    name: "kalonworks",
    url: "https://kalonworks.com",
  },

  blog: {
    title: "vowlt Blog",
    description:
      "Building vowlt in public - updates, technical posts, and product development insights.",
    emptyMessage: "No posts yet. Check back soon!",
  },

  license: "AGPL-3.0",
} as const;

export const RSS_CONFIG = {
  language: "en-us",
} as const;
