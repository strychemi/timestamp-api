const express = require('express');
const router = express.Router();
const path = require('path');
const timeStampController = require('../controllers/timestamp');

// root route
router.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, '../views/index.html'));
});

// api routes
router.get("/:timestamp", timeStampController.processTimeStamp);

module.exports = router;