// server.js
// where your node app starts

// init project
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/index');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mount express router to handle all our routes
app.use('/', routes);

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
