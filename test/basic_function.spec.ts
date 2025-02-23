import { describe, test, expect } from "vitest";
import { getPaths } from "../src/basic_function";

describe("Get paths", () => {
  test("Get paths from matrix", () => {
    expect(
      getPaths(3, 2, [
        [0, 1],
        [2, 3],
        [4, 5],
      ]),
    ).toEqual([
      [0, 1, 3, 5],
      [0, 2, 3, 5],
      [0, 2, 4, 5],
    ]);
    expect(
      getPaths(2, 2, [
        [0, 1],
        [2, 3],
      ]),
    ).toEqual([
      [0, 1, 3],
      [0, 2, 3],
    ]);
  });
  test("Check errors", () => {
    expect(
      getPaths(3, 2, [
        [0, 1],
        [2, 3],
      ]),
    ).toEqual(undefined);
    expect(
      getPaths(2, 2, [
        [0, 1],
        [2, 3],
        [4, 5],
      ]),
    ).toEqual(undefined);
    expect(
      getPaths(2, 2, [
        [0, 1],
        [2, 3, 4],
      ]),
    ).toEqual(undefined);
  });
});
