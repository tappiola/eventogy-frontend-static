import { formatDateRange } from "./helpers";

describe("formatDateRange", () => {
  it.each([
    [
      ["2024-01-20 12:21:52", "2024-01-22 11:03:14"],
      "January 20th - 22nd, 2024",
    ],
    [["2024-01-20 12:21:52"], "January 20th, 2024"],
    [
      ["2023-12-20 12:21:52", "2024-01-22 11:03:14"],
      "December 20th, 2023 - January 22nd, 2024",
    ],
    [
      ["2024-01-20 12:21:52", "2024-02-13 11:03:14"],
      "January 20th - February 13th, 2024",
    ],
  ])("when date range is '%s'", (range, expected) => {
    expect(formatDateRange(range)).toBe(expected);
  });
});
