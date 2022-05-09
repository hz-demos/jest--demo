const configuration = require("./jest.config");

configuration.clearMocks = false;
configuration.collectCoverage = false;
configuration.collectCoverageFrom = undefined;
configuration.coverageDirectory = undefined;
configuration.coverageProvider = 'v8';

configuration.testMatch = [
  "<rootDir>/**/jest-sandbox/**/?(*.)+(spec|test).[tj]s?(x)",
];

module.exports = configuration;
