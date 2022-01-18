// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    roots: ['<rootDir>/test'],
    verbose: true,
    setupFiles: ['./test/setupTests.ts'],
    setupFilesAfterEnv: ['<rootDir>test/setupTests.ts'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.(js|jsx)?$': 'babel-jest',
        '^.+\\.css$': 'jest-transform-css',
    },
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 70,
            lines: 80,
            statements: 80,
        },
    },
    globals: {
        'ts-jest': {
            diagnostics: false,
        },
    },
    collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/node_modules/**', '!**/vendor/**'],
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageProvider: 'babel',
    coverageReporters: ['json', 'text', 'lcov', 'clover'],
    errorOnDeprecated: true,
    notify: true,
    resetMocks: true,
    resetModules: true,
    testEnvironment: 'jsdom',
    watchman: true,
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$':
            '<rootDir>/test/fileMock.ts',
        '^@/(.*)$': '<rootDir>/src/$1',
    },
};
