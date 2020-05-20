const express = require('express');

const router = express.Router();
// We can omit '/posts' since we only get here
// when we are on '/posts' route

// route: '/posts'
router.get('/', (req, res) => {
  res.send('We are on posts !');
});

// route: '/posts/specific'
router.get('/specific', (req, res) => {
  res.send('We are on a specific post !');
});

module.exports = router;