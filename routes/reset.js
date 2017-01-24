/**
 * Created by kehoro on 19/01/17.
 */
var express = require('express');
var router = express.Router();

var sql = require('../sql');
var stage = "";
if (process.env.IS_LAMBDA) {
  stage = "/prod";
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  sql.populateDb();

  res.cookie('username', '', { httpOnly: false, expires: new Date(0)});
  res.send('Logged out and Database reset! <a href="' + stage +'/">Login Again!</a>');

});

module.exports = router;
