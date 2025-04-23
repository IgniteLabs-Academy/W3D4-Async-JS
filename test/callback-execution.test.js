test('Callback execution', () => {
  const cb = require('../index.js').runCallback; let called = false; cb(() => { called = true; }); expect(called).toBe(true);
});
