const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleNameMapper: {
    // tsconfig.jsonのcompilerOptions>pathsの定義に合わせる
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/tests/jest.customMatchers.ts"],
};

module.exports = createJestConfig(customJestConfig);
