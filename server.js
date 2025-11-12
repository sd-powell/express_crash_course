// Import the Express library
// const express = require('express');
import express from 'express';
// Import the path module
// const path = require('path');
import path from 'path';
// Import posts routes
// const posts = require('./routes/posts.js');
import posts from './routes/posts.js';
// Load environment variables from .env file
// Also specify in package.json "dev": "node --watch --env-file=.env server"
const port = process.env.PORT || 8000;

// Set-up static folder to serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// Create an instance of an Express application
const app = express();

// Routes middleware
app.use('/api/posts', posts);

// Define a route for the root URL
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
//     });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
//     });

// Start the server and listen on port 5000
app.listen(port, () => console.log(`Server is running on port ${port}`));

// watch flag is enabled for development convenience
// npm run dev