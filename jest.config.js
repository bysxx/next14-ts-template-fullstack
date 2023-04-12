const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const customJestConfig = {
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@(pages|components|hooks|interfaces|libs|layouts|styles)/(.+)$': '<rootDir>/$1/$2',
    '^@/(.*)$': '<rootDir>/$1',
    '^@/public/(.*)$': '<rootDir>/$1',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  clearMocks: true,
  // collectCoverage: true,
  collectCoverageFrom: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    '!./pages/_app.tsx',
    '!./pages/_document.tsx',
  ],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
