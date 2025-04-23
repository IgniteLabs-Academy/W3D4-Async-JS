test('Promise resolve', () => {
  return require('../index.js').getDataPromise().then(data => expect(data).toBe('Data loaded'));
});
