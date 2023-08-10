const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose
  .connect('mongodb://localhost:27017/demo_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Successfully connected to MongoDB');
    app.listen(3000, () => {
      console.log('Listening on port 3000');
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });