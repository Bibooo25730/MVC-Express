var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'My EJS App', message: 'Hello, EJS!' });
});

module.exports = router;
