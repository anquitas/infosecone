const express = require('express');
const app = express();

// lesson 1 - helmet import
let helmet = require('helmet')

// lesson 2 - hide `X-Powered-By: Express` info
app.use(helmet.hidePoweredBy({setTo: 'gomu gomu no fake info'}))












































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
