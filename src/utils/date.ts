// Date formatting utilities
// Centralizes date formatting to eliminate duplication

export const LOCALE = "en-US" as const;

const SHORT_MONTH_FORMAT: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
} as const;

const SHORT_MONTH_WITH_YEAR_FORMAT: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
} as const;

/**
 * Formats a date using smart year logic (GitHub-style)
 * - Current year: "Jan 15"
 * - Previous year: "Jan 15, 2024"
 * @example formatDate(new Date("2025-01-15")) // "Jan 15" (if current year is 2025)
 * @example formatDate(new Date("2024-01-15")) // "Jan 15, 2024" (if current year is 2025)
 */
export function formatDate(date: Date): string {
  const currentYear = new Date().getFullYear();
  const postYear = date.getFullYear();

  // If post is from current year, omit year for cleaner look
  if (postYear === currentYear) {
    return date.toLocaleDateString(LOCALE, SHORT_MONTH_FORMAT);
  }

  // If post is from previous year, include year
  return date.toLocaleDateString(LOCALE, SHORT_MONTH_WITH_YEAR_FORMAT);
}
