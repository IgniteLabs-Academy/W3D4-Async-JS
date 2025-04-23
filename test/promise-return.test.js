test('Promise return', () => {
  const p = require('../index.js').getDataPromise(); expect(p).toBeInstanceOf(Promise);
});
