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
        // Returns 200 by default
        res.json(posts.slice(0, limit));
    } else {    
        res.json(posts);
    }
});

// Get a single post by ID
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(posts.filter((post) => post.id === id));
});


// Start the server and listen on port 5000
app.listen(port, () => console.log(`Server is running on port ${port}`));

// watch flag is enabled for development convenience
// npm run dev