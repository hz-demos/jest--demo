describe("jest API demo", () => {
  describe("mockClear VS mockReset", () => {
    let testFn;
    beforeAll(() => {
      testFn = jest.fn().mockReturnValue(42);
    });
    test("mock implementation should works and accumulate called times is 1", () => {
      expect(testFn()).toBe(42);
      expect(testFn).toBeCalledTimes(1);
    });
    test("mock implementation should works and accumulate called times is 2", () => {
      expect(testFn()).toBe(42);
      expect(testFn).toBeCalledTimes(2);
    });
    test("mock implementation should works and accumulate called times reset to 1", () => {
      testFn.mockClear(); // only clear this mock function's using record.
      expect(testFn()).toBe(42);
      expect(testFn).toBeCalledTimes(1);
    });
    test("mock implementation should not works and accumulate called times reset to 1", () => {
      testFn.mockReset(); // also clear this mock function's implementation.
      expect(testFn()).not.toBe(42);
      expect(testFn).toBeCalledTimes(1);
    });
  });
  describe("mockRestore", () => {
    let testFn;
    let testObj = { testFn: () => 100 };
    beforeAll(() => {
      testFn = jest.spyOn(testObj, "testFn").mockImplementation(() => 42);
    });
    test("mock implementation should works and accumulate called times is 1", () => {
      expect(testObj.testFn()).toBe(42);
      expect(testFn).toBeCalledTimes(1);
    });
    test("mock implementation should works and accumulate called times is 2", () => {
      expect(testObj.testFn()).toBe(42);
      expect(testFn).toBeCalledTimes(2);
    });
    test("mock implementation should be deleted and call the real function", () => {
      testFn.mockRestore();
      expect(testObj.testFn()).toBe(100);
    });
  });
});
