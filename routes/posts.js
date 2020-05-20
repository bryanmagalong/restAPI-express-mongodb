const express = require('express');
const router = express.Router();
const Post= require('../models/Post');

// We can omit '/posts' since we only get here
// when we are on '/posts' route

// route: '/posts'
router.get('/', (req, res) => {
  res.send('We are on posts !');
});

router.post('/', (req, res) => {
  console.log(req.body);
});

// route: '/posts/specific'
router.get('/specific', (req, res) => {
  res.send('We are on a specific post !');
});

module.exports = router;