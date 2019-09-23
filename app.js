const express = require('express');
const app = express();

//middleware
function requestcomming(req, res, next) {
  if (req.params['product'].indexOf('mecca') > 0) {
    res.send('error');
  }
  console.log('Request is comming.....');
  next();
}
function authCheck(req, res, next) {
  console.log('Authientication is CHecking...');
  next();
}

//express route parameter
app.get('/', requestcomming, authCheck, function(req, res) {
  res.send('Index Page');
});
app.get('/mecca/:product', requestcomming, authCheck, function(req, res) {
  res.send(`mecca ${req.params['product']}`);
});
app.get('/carsales', requestcomming, authCheck, function(req, res) {
  res.send('carsales');
});

app.listen(5777, () => {
  console.log('server is run on 5777');
});
