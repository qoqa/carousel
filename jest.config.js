module.exports = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/cypress/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '.(jpg|jpeg|png|otf|webp|ttf|woff|woff2|svg)$':
      '<rootDir>/src/test-utils/fileTransform.js',
  },
  // For absolute imports
  modulePaths: ['<rootDir>/src'],
  collectCoverageFrom: [
    'src/**/*.{js,ts,tsx}',
    '!src/**/*.{types,type,d}.ts',
    '!src/setup*',
    '!src/index.tsx',
    '!src/**/index.ts',
    '!src/types/**',
    '!**/test-utils/**',
    '!src/pages/*',
  ],
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 70,
      functions: 95,
      lines: 94,
    },
  },
};
