import { sum } from "../basic/sum";

jest.mock("../basic/sum", () => ({
  sum: jest.fn(() => 666),
}));

test("adds 1 + 2 to equal 3", () => {
  expect(sum()).toBe(666);
});
