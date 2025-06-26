const { getUserData } = require('../index.js');

test('getUserData returns null for missing keys', () => {
  const result = getUserData('nonexistentKey');
  expect(result).toBeNull();
});
