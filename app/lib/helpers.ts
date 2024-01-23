import dayjs from "dayjs";

import advancedFormat from "dayjs/plugin/advancedFormat.js";

/**
 * Converts a range of dates to string.
 * @param  {String[]} dateRange  Space Delimited sequence of names.
 * @return {String}       Human readable date range.
 * @example ["2024-01-20 12:21:52","2024-01-22 11:03:14"] => "January 20th - 22nd, 2024"
 * @example ["2024-01-20 12:21:52"] => "January 20th, 2024"
 * @example ["2023-12-20 12:21:52", "2024-01-22 11:03:14"] => "December 20th, 2023 - January 22nd, 2024"
 * @example ["2024-01-20 12:21:52", "2024-02-13 11:03:14"] => "January 20th - February 13th, 2024"
 */
export const formatDateRange = (dateRange: string[]): string => {
  dayjs.extend(advancedFormat);
  const today = dayjs();

  const startDate = dayjs(dateRange[0]);

  if (dateRange.length === 1) {
    return startDate.format("MMMM Do, YYYY");
  }

  const endDate = dayjs(dateRange[dateRange.length - 1]);
  const endDateFormatted = endDate.format("MMMM Do, YYYY");

  if (startDate.year() === endDate.year()) {
    if (startDate.month() === endDate.month()) {
      return `${startDate.format("MMMM Do")} - ${endDate.format("Do, YYYY")}`;
    }

    return `${startDate.format("MMMM Do")} - ${endDateFormatted}`;
  }

  return `${startDate.format("MMMM Do, YYYY")} - ${endDateFormatted}`;
};
