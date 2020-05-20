const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// We can omit '/posts' since we only get here
// when we are on '/posts' route

// method: GET, route: '/posts', Get all posts
router.get('/', async (req, res) => {
  try{
    const posts = await Post.find();
    res.json(posts);
  }
  catch(err){
    res.json({message: err});
  }
});

// method: POST, route: '/posts', Submit a new post
router.post('/', async (req, res) => {
  // create a new post
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  
  console.log(post);
  try{
    const savedPost = await post.save();
    res.json(savedPost);
  } catch(err) {
    res.json({message: err});
  }
});

// method: GET, route: '/posts/:postId', Get a post by its id
// dynamic
router.get('/:postId', async (req, res) => {
  try{
    // we can get te postId with req.params
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch(err) {
    res.json({message: err});
  }
});

// method: DELETE, route: '/posts/:postId', Delete a post
router.delete('/:postId', async (req, res) => {
  try{
    const post = await Post.findByIdAndDelete(req.params.postId);
    res.json('post deleted !');
  } catch(err) {
    res.json({message: err});
  }
});

// method: PATCH, route: '/posts/:postId', Update a post
router.patch('/:postId', async (req, res) => {
  try{
    const post = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          title: req.body.title,
          description: req.body.description
        }
      }
    );
    
    res.json(post);
  } catch(err) {
    res.json({message: err});
  }
});

module.exports = router;