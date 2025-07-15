const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

//  data source
let users = [
  {
    id: "1",
    firstName: "Anshika",
    lastName: "Agarwal",
    hobby: "Teaching"
  }
];

/**
 * Middleware: Logs method, URL, and timestamp
 */
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

/**
 * Validation middleware for POST and PUT
 */
function validateUser(req, res, next) {
  const { firstName, lastName, hobby } = req.body;
  if (!firstName || !lastName || !hobby) {
    return res.status(400).json({ error: "Missing required fields: firstName, lastName, hobby" });
  }
  next();
}

/**
 * GET /users - Get all users
 */
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

/**
 * GET /users/:id - Get user by ID
 */
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.status(200).json(user);
});

/**
 * POST /user - Add new user
 */
app.post('/user', validateUser, (req, res) => {
  const newUser = {
    id: String(users.length + 1), // Simple ID assignment
    ...req.body
  };
  users.push(newUser);
  res.status(201).json(newUser);    
});

/**
 * PUT /user/:id - Update existing user
 */
app.put('/user/:id', validateUser, (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users[index] = { id: req.params.id, ...req.body };
  res.status(200).json(users[index]);
});

/**
 * DELETE /user/:id - Delete user by ID
 */
app.delete('/user/:id', (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  const deletedUser = users.splice(index, 1);
  res.status(200).json({ message: "User deleted", user: deletedUser[0] });
});

/**
 * Start the server
 */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
