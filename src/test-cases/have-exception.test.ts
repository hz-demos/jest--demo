import { willThrow } from "./have-exception";

test("adds 1 + 2 to equal 3", () => {
  expect(() => {
    willThrow();
  }).toThrowError("oops");
});
