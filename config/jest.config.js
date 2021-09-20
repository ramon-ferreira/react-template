/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  bail: 1,
  clearMocks: true,
  setupFiles: [
    '<rootDir>/jest.setup.js'
  ],
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/../src/components/$1',
    '@pages/(.*)': '<rootDir>/../src/pages/$1',
    '@assets/(.*)': '<rootDir>/../src/assets/mocks/fileMock.js',
    '.+\\.scss$': 'identity-obj-proxy'
  },
  roots: [
    '../src/'
  ],
  testEnvironment: 'jsdom',
  verbose: true
};
