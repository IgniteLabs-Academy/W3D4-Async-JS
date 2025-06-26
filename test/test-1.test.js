const { fetchUsers } = require('../index.js');

test('fetchUsers returns an array of users from the API', async () => {
  const users = await fetchUsers();
  expect(Array.isArray(users)).toBe(true);
  expect(users.length).toBeGreaterThan(0);
  expect(users[0]).toHaveProperty('name');
  expect(users[0]).toHaveProperty('email');
});
