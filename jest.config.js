const configuration = require("./jest.config");

configuration.testPathIgnorePatterns = [
  "<rootDir>/src/cases/jest-clear-reset-restore/index.test.js",
  "<rootDir>/src/cases/jest-sandbox/.+test.js",
];

module.exports = configuration;
