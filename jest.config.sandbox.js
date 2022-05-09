const configuration = require("./jest.config.base");

module.exports = {
  ...configuration,
  clearMocks: false,
  collectCoverage: false,
  collectCoverageFrom: undefined,
  coverageDirectory: undefined,
  coverageProvider: "v8",
  testMatch: ["<rootDir>/**/jest-sandbox/**/?(*.)+(spec|test).[tj]s?(x)"],
};
