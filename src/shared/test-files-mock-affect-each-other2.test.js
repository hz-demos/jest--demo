import { sum } from "./sum";

/**
 * @note
 * though test-files-mock-affect-each-other1.test has mock sum function
 * and didn't clear/reset/restore function
 * but it doesn't affect this testing file.
 */
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
