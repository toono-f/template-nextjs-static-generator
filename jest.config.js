const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // tsconfig.jsonのcompilerOptions>pathsの定義に合わせる
    "^.+\\.(svg)$": "<rootDir>/src/tests/component-type/__mocks__/SvgrMock.tsx", // 参考: https://github.com/vercel/next.js/discussions/31152#discussioncomment-3659373
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/tests/jest.customMatchers.ts"],
};

module.exports = createJestConfig(customJestConfig);
