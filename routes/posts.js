// import express module
// const express = require('express');
import express from 'express';
import { 
    getPosts, 
    getPost, 
    createPost, 
    updatePost, 
    deletePost
} from '../controllers/postController.js';
// create a router instance
const router = express.Router();

// Working with JSON data
// let posts = [
//     { id: 1, title: 'Post One' },
//     { id: 2, title: 'Post Two' },
//     { id: 3, title: 'Post Three' }
// ]

// Middleware logger
// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
//     next();
// };

// Get all posts
router.get('/', getPosts);
// router.get('/', (req, res, next) => {
//     const limit = parseInt(req.query.limit);

//     if (!isNaN(limit) && limit > 0) {
//         // Returns 200 by default - but added here for clarity
//         return res.status(200).json(posts.slice(0, limit));
//     }
    
//     res.status(200).json(posts);
// });

// Get a single post by ID
router.get('/:id', getPost);
// router.get('/:id', (req, res, next) => {
//     const id = parseInt(req.params.id);
//     // res.json(posts.filter((post) => post.id === id));
//     const post = posts.find((post) => post.id === id);

//     if (!post) {
//         // return res.status(404).json({ msg: `A post with the id of ${id} was not found`});
//         const error = new Error(`A post with the id of ${id} was not found`);
//         error.status = 404;
//         return next(error);
//     }

//     res.status(200).json(post);
// });

// Create a new post
router.post('/', createPost);
// router.post('/', (req, res, next) => {
//     // console.log(req.body);
//     const newPost = {
//         id: posts.length + 1,
//         title: req.body.title
//     };

//     if (!newPost.title) {
//         // return res.status(400).json({ msg: 'Please include a title for the post' });
//         const error = new Error(`Please include a title for the post`);
//         error.status = 400;
//         return next(error);
//     }

//     posts.push(newPost);
//     res.status(201).json({ msg: 'Post created' });
// });

// Update a post by ID
router.put('/:id', updatePost);
// router.put('/:id', (req, res, next) => {
//     const id = parseInt(req.params.id);
//     const post = posts.find((post) => post.id === id);
    
//     if (!post) {
//         // return res.status(404).json({ msg: `A post with the id of ${id} was not found`});
//         const error = new Error(`A post with the id of ${id} was not found`);
//         error.status = 404;
//         return next(error);
//     }

//     post.title = req.body.title;
//     res.status(200).json(posts);
// });

// Delete a post by ID
router.delete('/:id', deletePost);
// router.delete('/:id', (req, res, next) => {
//     const id = parseInt(req.params.id);
//     const post = posts.find((post) => post.id === id);
    
//     if (!post) {
//         // return res.status(404).json({ msg: `A post with the id of ${id} was not found`});
//         const error = new Error(`A post with the id of ${id} was not found`);
//         error.status = 404;
//         return next(error);
//     }

//     posts = posts.filter((post) => post.id !== id);
//     res.status(200).json(posts);
// });

// Export the router
// module.exports = router;
export default router;