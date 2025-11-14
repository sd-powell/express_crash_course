// Import the Express library
// const express = require('express');
import express from 'express';
// Import the path module
// const path = require('path');
import path from 'path';
// Import url module
import { fileURLToPath } from 'url';
// Import posts routes
// const posts = require('./routes/posts.js');
import posts from './routes/posts.js';
// Load environment variables from .env file
// Also specify in package.json "dev": "node --watch --env-file=.env server"
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
const port = process.env.PORT || 8000;

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create an instance of an Express application
const app = express();

// Body parser middleware to handle JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Logger middleware
app.use(logger);

// Set-up static folder to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes middleware
app.use('/api/posts', posts);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

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