/**
 * Created by kehoro on 19/01/17.
 */

var express = require('express');
var router = express.Router();
var sql = require('../sql');

/* GET users listing. */
router.get('/', function(req, res, next) {

  var username = (req.query.username ? req.query.username : req.cookies.username);
  var tickets = sql.getTickets(username);
  var gifts = sql.getGiftTickets(username);
  // res.send('respond with a resource');
  console.log('>>>>>>>>>>>>>>>>>>>>>>>');
  console.log(tickets);
  console.log('^^^^^^^^^^^^^^^^^^^^^^^');
  res.render('tickets', { tickets: tickets, gifts: gifts });
});


router.get('/buy', function(req, res, next) {

  var users = sql.getAllUsers();
  // res.send('respond with a resource');
  res.render('buy', { users: users });
});

router.get('/buy/confirm', function(req, res, next) {

  var who = (req.query.who ? req.query.who : 'yourself');
  sql.buyTicket(req.query.number, req.cookies.username, who, req.query.comment);
  res.render('bought', { count: req.query.number, who:  decodeURIComponent(who)});

});

module.exports = router;
