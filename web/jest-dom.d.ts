import '@testing-library/jest-dom'
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'

declare module '@jest/globals' {
  interface Matchers<R = void, T = {}> extends TestingLibraryMatchers<T, R> {}
}

export {}
