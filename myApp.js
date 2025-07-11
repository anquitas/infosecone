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
app.use(helmet.xssFilter()) // use of it like this later became a vulnerability

// lesson 5 - Avoid Inferring the Response MIME Type with `helmet.noSniff()`
app.use(helmet.noSniff())


// lesson 6 - Prevent IE from Opening Untrusted HTML with helmet.ieNoOpen()
app.use(helmet.ieNoOpen())


// lesson 7 - Ask Browsers to Access Your Site via HTTPS Only with helmet.hsts()
// num * dayHour * houtMin * minSec
var ninetyDaysInSeconds = 90*24*60*60
app.use(helmet.hsts({maxAge: ninetyDaysInSeconds, force: true}))
// only via https for a specific duration


// lesson 8 - Disable DNS Prefetching with helmet.dnsPrefetchControl()
app.use(helmet.dnsPrefetchControl())
























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
