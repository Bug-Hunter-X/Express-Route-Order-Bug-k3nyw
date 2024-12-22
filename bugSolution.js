const express = require('express');
const app = express();

// Correct route order: Define the more specific route before the more general route.
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch the user with id userId ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});
app.get('/users', (req, res) => {
  // ... some database query to fetch all users ...
  res.send(users);
});