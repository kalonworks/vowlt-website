// Date formatting utilities
// Centralizes date formatting to eliminate duplication

export const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
} as const;

export const LOCALE = "en-US" as const;

/**
 * Formats a date using the site's standard format
 * @example formatDate(new Date("2025-01-15")) // "January 15, 2025"
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString(LOCALE, DATE_FORMAT_OPTIONS);
}
