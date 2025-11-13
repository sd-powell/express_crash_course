// import express module
// const express = require('express');
import express from 'express';
// create a router instance
const router = express.Router();

// Working with JSON data
let posts = [
    { id: 1, title: 'Post One' },
    { id: 2, title: 'Post Two' },
    { id: 3, title: 'Post Three' }
]

// Middleware logger
// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
//     next();
// };

// Get all posts
router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        // Returns 200 by default - but added here for clarity
        return res.status(200).json(posts.slice(0, limit));
    }
    
    res.status(200).json(posts);
});

// Get a single post by ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // res.json(posts.filter((post) => post.id === id));
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({ msg: `A post with the id of ${id} was not found`});
    }

    res.status(200).json(post);
});

// Create a new post
router.post('/', (req, res) => {
    // console.log(req.body);
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };

    if (!newPost.title) {
        return res.status(400).json({ msg: 'Please include a title for the post' });
    }

    posts.push(newPost);
    res.status(201).json({ msg: 'Post created' });
});

// Update a post by ID
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    
    if (!post) {
        return res.status(404).json({ msg: `A post with the id of ${id} was not found`});
    }

    post.title = req.body.title;
    res.status(200).json(posts);
});

// Delete a post by ID
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    
    if (!post) {
        return res.status(404).json({ msg: `A post with the id of ${id} was not found`});
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
});

// Export the router
// module.exports = router;
export default router;