var express = require('express');
var router = express.Router();

// import events module
var events = require('./events');

/* GET home page. */
router.get('/', function(req, res, next) {
  var env = express().get('env');
  console.log('env:', env);
  
  // load events data and inject it into index template
  var data = events.getAllEvents();
  res.render('index', { title: 'IWW Music - Events, Label, Party Munich', env: env, data: data});
});

module.exports = router;
