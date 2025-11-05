// Blog post utilities
// Centralizes blog post filtering, sorting, and fetching logic

import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

/**
 * Filter function to exclude draft posts
 * @example getCollection("blog", isPublished)
 */
export function isPublished(post: { data: { draft?: boolean } }): boolean {
  return post.data.draft !== true;
}

/**
 * Sorts blog posts by publication date in descending order (newest first)
 */
export function sortByDateDesc(a: BlogPost, b: BlogPost): number {
  return b.data.pubDate.getTime() - a.data.pubDate.getTime();
}

/**
 * Fetches all published blog posts, sorted by date (newest first)
 * @example const posts = await getPublishedPosts();
 */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection("blog", isPublished);
  return posts.sort(sortByDateDesc);
}
