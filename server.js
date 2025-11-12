// Import the Express library
const express = require('express');
// Import the path module
const path = require('path');
// Load environment variables from .env file
// Also specify in package.json "dev": "node --watch --env-file=.env server"
const port = process.env.PORT || 8000;

// Set-up static folder to serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// Create an instance of an Express application
const app = express();

// Define a route for the root URL
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
//     });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
//     });


// Working with JSON data
let posts = [
    { id: 1, title: 'Post One' },
    { id: 2, title: 'Post Two' },
    { id: 3, title: 'Post Three' }
]

// Get all posts
app.get('/api/posts', (req, res) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        // Returns 200 by default - but added here for clarity
        return res.status(200).json(posts.slice(0, limit));
    }
    
    res.status(200).json(posts);
});

// Get a single post by ID
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // res.json(posts.filter((post) => post.id === id));
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({ msg: `A post with the id of ${id} was not found`});
    }

    res.status(200).json(post);
});


// Start the server and listen on port 5000
app.listen(port, () => console.log(`Server is running on port ${port}`));

// watch flag is enabled for development convenience
// npm run dev