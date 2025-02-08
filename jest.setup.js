import '@testing-library/jest-dom';

// Mock window properties and methods
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
class IntersectionObserver {
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
}
window.IntersectionObserver = IntersectionObserver;

// Mock ResizeObserver
class ResizeObserver {
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
}
window.ResizeObserver = ResizeObserver;

// Set initial window dimensions
Object.defineProperty(window, 'innerWidth', {
  writable: true,
  value: 1024,
});

Object.defineProperty(window, 'innerHeight', {
  writable: true,
  value: 768,
});

// Mock window methods
window.scrollTo = jest.fn();
window.scroll = jest.fn();

// Mock requestAnimationFrame and cancelAnimationFrame
global.requestAnimationFrame = callback => setTimeout(callback, 0);
global.cancelAnimationFrame = jest.fn();

// Mock HTMLElement methods
HTMLElement.prototype.scrollIntoView = jest.fn();

// Mock console methods to reduce noise
console.error = jest.fn();
console.warn = jest.fn();

// Mock image loading
Object.defineProperty(global.Image.prototype, 'src', {
  set() {
    setTimeout(() => this.onload(), 0);
  },
});

// Mock getComputedStyle
window.getComputedStyle = jest.fn().mockImplementation(() => ({
  getPropertyValue: jest.fn(),
}));

// Add custom matchers
expect.extend({
  toHaveStyle(received, style) {
    const pass = received.style && Object.entries(style).every(([key, value]) => 
      received.style[key] === value
    );
    return {
      pass,
      message: () => `expected ${received} to have style ${style}`,
    };
  },
});
