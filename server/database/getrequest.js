const db = require("./index");
const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send("log out success");
}

function getUser(req, res, next) {
  db
    .any(
      `SELECT user_id, username, email, first_name, last_name, user_image
          FROM users
          WHERE user_id=$1`,
      [req.user.user_id]
    )
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
}

function getAllUsers(req, res, next) {
  db.any(
      `SELECT user_id, username, email, first_name, last_name, user_image
          FROM users;`
    )
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
}

module.exports = {
  logoutUser,
  getUser,
  getAllUsers
}