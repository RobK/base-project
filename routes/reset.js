/**
 * Created by kehoro on 19/01/17.
 */
var express = require('express');
var router = express.Router();

var sql = require('../sql');

/* GET users listing. */
router.get('/', function(req, res, next) {
  sql.populateDb();

  res.cookie('username', '', { httpOnly: false, expires: new Date(0)});
  res.send('Logged out and Database reset! <a href="../">Login Again!</a>');

});

module.exports = router;
