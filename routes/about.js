var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.render('about', { title: 'My EJS App', message: 'Hello, About!' });
});

module.exports = router;
