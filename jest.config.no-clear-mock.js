const configuration = require("./jest.config.base");

module.exports = {
  ...configuration,
  clearMocks: false,
  testMatch: ["<rootDir>/**/jest-clear-reset-restore/**/?(*.)+(spec|test).[tj]s?(x)"],
};
