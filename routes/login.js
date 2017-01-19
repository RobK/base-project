/**
 * Created by kehoro on 19/01/17.
 */
var express = require('express');
var router = express.Router();

var sql = require('../sql');

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log('>>>>>>>>>>>>>>>>>>>>>>>');
  if (sql.login(req.body['username'], req.body['password']).length > 0) {
    res.cookie('username', req.body['username'], { httpOnly: false});
    //res.render('loggedIn', { title: 'Express' });
    res.redirect("/tickets?username=" + req.body['username']);
  } else {
    res.redirect("/");
  }


});

module.exports = router;
