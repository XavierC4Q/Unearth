const db = require("./index");
const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send("log out success");
}

function getUser(req, res, next) {
  db.any(
      `SELECT user_id, username, email, first_name, last_name, user_image, search_distance
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

function getSingleUser(req, res, next) {
  db.any(
    `SELECT users.user_id, username, email, first_name, last_name, user_image, search_distance, latitude, longitude, location_name
        FROM users JOIN userlocation ON (users.user_id = userlocation.user_id)
        WHERE users.user_id=${req.params.userID}`
  )
  .then(data => {
    res.json(data)
  })
  .catch(error => {
    res.json(error)
  })
}

function getAllUsers(req, res, next) {
  db.any(
      `SELECT users.user_id, username, first_name, last_name, latitude, longitude, location_name, search_distance, user_image, email 
      FROM users JOIN userlocation ON (users.user_id = userlocation.user_id)`
    )
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
}

function getUserLocation(req, res, next) {
  db.any(
    `SELECT users.user_id, username, location_name, latitude, longitude, search_distance
    FROM users JOIN userlocation ON (users.user_id = userlocation.user_id)
    WHERE users.user_id = ${req.params.userID}`
  )
  .then(data => {
    res.json(data)
  })
  .catch(error => {
    res.json(error)
  })
}

module.exports = {
  logoutUser,
  getUser,
  getSingleUser,
  getAllUsers,
  getUserLocation
}
