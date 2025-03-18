const express = require('express');
const app = express();
const port = 3006;

// import routes
const postRoutes = require('./routers/posts')

// import middlewares error
const serverError = require('./middlewares/serverError')

// Server Listening
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Home Route
app.get('/', (req,res) => {

    //throw new Error('Server Error')

    res.send('Welcome to Home Server')
})

// JSON Middleware
app.use(express.json())

// Middleware
app.use('/api/v1/posts', postRoutes);

// Middlewares Error
app.use(serverError)