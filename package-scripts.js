module.exports = {
  scripts: {
    default: "nps dev",
    dev: {
      default: "vite",
    },
    test: {
      default: "jest",
      watch: {
        script: "jest --watch",
        description: "run in the amazingly intelligent Jest watch mode",
      },
      mockcrr: {
        script: "jest --config=./jest.config.no-clear-mock.js",
        description: "run to compare mockReset & mockClear & mockRestore",
      },
      sandbox: {
        script: "jest --config=./jest.config.sandbox.js",
        description: "run to test sandbox if some mocks influence other files",
      },
    },
    build: {
      default: "vite build",
    },
    preview: {
      default: "vite preview",
    },
  },
};
