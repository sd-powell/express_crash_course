// Import the Express library
const express = require('express');
// Import the path module
const path = require('path');

// Create an instance of an Express application
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
    });

// Start the server and listen on port 5000
app.listen(8000, () => console.log('Server is running on port 8000'));

// watch flag is enabled for development convenience
// npm run dev