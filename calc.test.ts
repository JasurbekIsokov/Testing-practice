import { describe, expect, it } from "vitest";

describe("calc", () => {
  it("should return 2 for 1 + 1");
  const actual = 1 + 1;
  const expected = 2;

  expect(actual).toBe(expected); // ===
});
