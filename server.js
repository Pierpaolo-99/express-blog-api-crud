const express = require('express');
const app = express();
const port = 3006;

// import routes
const postRoutes = require('./routers/posts')

// Server Listening
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Home Route
app.get('/', (req,res) => {
    res.send('Welcome to Home Server')
})

// Middleware
app.use('/api/v1/posts', postRoutes);