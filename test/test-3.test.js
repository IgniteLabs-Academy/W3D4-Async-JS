const { saveUserData, getUserData } = require('../index.js');

test('saveUserData stringifies and getUserData parses objects', () => {
  const key = 'jsonTest';
  const obj = { foo: 'bar', num: 42 };
  saveUserData(key, obj);
  const result = getUserData(key);
  expect(result).toEqual(obj);
});
