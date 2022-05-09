const configuration = require("./jest.config.base");

module.exports = {
  ...configuration,
  testPathIgnorePatterns: [
    "<rootDir>/src/cases/jest-clear-reset-restore/.+test.js",
    "<rootDir>/src/cases/jest-sandbox/.+test.js",
  ],
};
