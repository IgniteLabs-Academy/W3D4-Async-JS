const { fetchUsers } = require('../index.js');

test('fetchUsers returns an array even if there is an error', async () => {
  // Temporarily override fetch to simulate error
  const originalFetch = global.fetch;
  global.fetch = () => Promise.reject(new Error('Network error'));
  const users = await fetchUsers();
  expect(Array.isArray(users)).toBe(true);
  global.fetch = originalFetch;
});
