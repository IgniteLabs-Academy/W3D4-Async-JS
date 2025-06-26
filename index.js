// Week 3 Day 4: Async JavaScript Assignment

// Fetch users from the JSONPlaceholder API and return them as an array
async function fetchUsers() {
  // Use fetch to get data from https://jsonplaceholder.typicode.com/users
  // Parse the response as JSON and return the array of users
  // If there is an error, return an empty array
}

// Save user data to localStorage (or a fallback in Node.js)
function saveUserData(key, value) {
  // Convert the value to a JSON string and save it using the provided key
  // Use localStorage in the browser, or a fallback if running in Node.js
}

// Retrieve user data from localStorage (or a fallback in Node.js)
function getUserData(key) {
  // Get the value for the key from localStorage (or fallback)
  // Parse the JSON string back to an object and return it
  // Return null if the key does not exist
}

module.exports = {
  fetchUsers,
  saveUserData,
  getUserData
};
