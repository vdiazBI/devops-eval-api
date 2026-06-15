const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/greet', (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).json({ error: 'name query param is required' });
  }
  res.json({ message: `Hello, ${name}!` });
});

module.exports = app;
