// Application constants
// Eliminates magic strings and numbers throughout the codebase

export const ROUTES = {
  home: "/",
  blog: "/blog",
  blogPost: (id: string) => `/blog/${id}`,
  rss: "/rss.xml",
} as const;

export const COLLECTIONS = {
  blog: "blog",
} as const;

/**
 * Z-index layering system
 * Ensures consistent stacking context across the application
 */
export const Z_INDEX = {
  content: 10,        // Interactive content above overlays
  header: 40,         // Site header
  themeToggle: 50,    // Theme toggle button (always accessible)
  modal: 100,         // Modals and dialogs
} as const;

/**
 * External service URLs
 */
export const EXTERNAL_URLS = {
  kit: "https://app.kit.com/forms/8740520/subscriptions",
  kalonworks: "https://kalonworks.com",
} as const;
