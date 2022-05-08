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
      mockrcr: {
        script: "jest --config=./jest-configurations/jest.config.no-clear-mock.js",
        description: "run to compare mockReset & mockClear & mockRestore",
      }
    },
    build: {
      default: "vite build",
    },
    preview: {
      default: "vite preview",
    },
  },
};
