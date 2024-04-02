require('dotenv').config(); // Load environment variables always

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');

// Middlewares
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
// app.use(expressLayouts); // Remove if not used
app.use(express.static('public'));

// Mongoose connection
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to Mongoose"))
  .catch((error) => console.error("Database connection error:", error));

// Routes
app.use('/', indexRouter);

// Start server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
