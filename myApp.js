// IMPORT
const express = require('express');
// INITS
const app = express();



// lesson 1 - helmet import
let helmet = require('helmet')

// lesson 2 - hide `X-Powered-By: Express` info
app.use(helmet.hidePoweredBy({setTo: 'gomu gomu no fake info'}))

// lesson 3 - guarding against framing
app.use(helmet.frameguard({
  action: 'deny'
  // action: 'sameorigin'
  // action: 'allow-from'
}))

// lesson 4 - Mitigate the Risk of XSS Attacks with `helmet.xssFilter()`
// XSS -- Cross Site Scripting 
app.use(helmet.xssFilter())







































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
