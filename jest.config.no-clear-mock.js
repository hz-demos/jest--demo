const configuration = require("./jest.config.base");

configuration.clearMocks = false;

configuration.testMatch = [
  "<rootDir>/**/jest-clear-reset-restore/**/?(*.)+(spec|test).[tj]s?(x)",
];

module.exports = configuration;
