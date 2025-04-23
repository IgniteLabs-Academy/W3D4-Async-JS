test('Async function', () => {
  const fn = require('../index.js').loadAsyncData; expect(fn.constructor.name).toBe('AsyncFunction');
});
