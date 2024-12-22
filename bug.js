const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch the user with id userId ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

// This route is defined *after* the /users/:id route.
// This causes a problem because Express matches routes in order
// and the more specific route (/users/:id) should come before the more
// general route (/users).

app.get('/users', (req, res) => {
  // ... some database query to fetch all users ...
  res.send(users);
});