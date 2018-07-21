const moment = require('moment');

exports.processTimeStamp = (req, res) => {
  let input = req.params.timestamp;
  
  // parse as number, this checks if we have a potential unix format or natural date
  let parsedNumber = Number(input);
  
  // if it's NaN, then we try to parse input as into the specified natural language format
  let parsedMoment = parsedNumber ? moment.unix(parsedNumber) : moment(input, "MMMM D, YYYY");
  
  let natural = null;
  let unix = null;
  
  // check if it's valid
  if (parsedMoment.isValid()) {
    // generate the appropriate string formats using moment's API
    natural = parsedMoment.format("MMMM D, YYYY");
    unix = parsedMoment.format("X"); // "X" is secs, "x" gives ms
  }
  
  // send the response as json
  res.json({ natural, unix });
};