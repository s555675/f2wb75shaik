var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('yogurt', { title: 'Seacrh results yogurt' });
});

module.exports = router;
