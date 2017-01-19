/**
 * Created by kehoro on 19/01/17.
 */

var alasql = require('alasql');


var queries = [

  'DROP TABLE IF EXISTS tickets',
  'CREATE TABLE tickets (username string, number number, who string, comment string)',


  'DROP TABLE IF EXISTS users',
  'CREATE TABLE users (username string, password string, creditCard string, socialSecurityNumber string)',
  "INSERT INTO users VALUES " +
    "('john','john', '1111 1111 1111 1111', 'DDMMYY-A1234')," +
    "('jane','jane', '2222 2222 2222 2222', 'DDMMYY-A1234')," +
    "('mary','mary', '3333 3333 3333 3333', 'DDMMYY-A1234')," +
    "('joe','joe', '4444 4444 4444 4444', 'DDMMYY-A1234')"
];

function run(statement) {
  console.log('DEBUG:', statement);
  return alasql(statement);
}

function populateDb () {
  queries.forEach(function (statement) {
    run(statement);
  });
}


function login(user, pass) {
  return run('SELECT * from users WHERE username = "' + unescape(user) + '" AND password = "' + pass + '"');
}

function getAllUsers() {
  return run('SELECT username FROM users');
}

function buyTicket(count, username, forWho, comment) {
  return run('INSERT INTO tickets VALUES ("' + username + '", ' + count + ', "' + forWho + '", \'' + comment + '\')');
}

function getTickets(username) {
  return run('SELECT * from tickets where username = "' + username + '"');
}

function getGiftTickets(username) {
  return run('SELECT * from tickets where who = "' + username + '"');
}



module.exports = {
  getTickets: getTickets,
  getGiftTickets: getGiftTickets,
  buyTicket: buyTicket,
  getAllUsers: getAllUsers,
  populateDb: populateDb,
  login: login
};