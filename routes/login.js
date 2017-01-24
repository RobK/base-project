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
router.post('/', function(req, res, next) {
  console.log('>>>>>>>>>>>>>>>>>>>>>>>');
  if (sql.login(req.body['username'], req.body['password']).length > 0) {
    res.cookie('username', req.body['username'], { httpOnly: false});
    res.redirect(stage + "/tickets?username=" + req.body['username']);
  } else {
    res.redirect(stage + "/");
  }


});

module.exports = router;
