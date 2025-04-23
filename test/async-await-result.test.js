test('Async await result', () => {
  return require('../index.js').loadAsyncData().then(data => expect(data).toBe('Async data'));
});
