const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  displayName: "storyshots",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // tsconfig.jsonのcompilerOptions>pathsの定義に合わせてください
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: ["<rootDir>/src/tests/jest.storyshots.ts"],
};

module.exports = createJestConfig(customJestConfig);
