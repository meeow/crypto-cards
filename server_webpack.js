//server-side code for accessing contract on ethereum node running locally

console.log('Server-side code running');

const express = require('express');
const app = express();

// serve files from the public directory
app.use(express.static('public_webpack'));

// start the express web server listening on 8080
app.listen(8080, () => {
  console.log('listening on 8080');
});

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public_webpack/webpack-test.html');
});