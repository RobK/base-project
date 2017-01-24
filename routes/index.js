var express = require('express');
var router = express.Router();

var sql = require('../sql');
var stage = "";
if (process.env.IS_LAMBDA) {
  stage = "/prod";
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    stage: stage
  });
});

module.exports = router;
