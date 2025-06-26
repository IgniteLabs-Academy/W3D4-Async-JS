const { saveUserData, getUserData } = require('../index.js');

test('saveUserData and getUserData work correctly', () => {
  const key = 'testUser';
  const value = { name: 'Alice', email: 'alice@example.com' };
  saveUserData(key, value);
  const result = getUserData(key);
  expect(result).toEqual(value);
});
