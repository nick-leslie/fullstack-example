import { expect, test } from "vitest";
function sum(a: number, b: number) {
  return a + b;
}
test("adds 1 + 2 to equal 3", () => {
    console.log("test")
  expect(sum(1, 2)).toBe(3);
});
