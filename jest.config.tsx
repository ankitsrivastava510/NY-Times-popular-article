/** @type {import('jest').Config} */

import { defaults } from 'jest-config';

module.exports = {
  // ...
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  // ...
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts', 'cts'],
};

