const db = require("./index");
const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

function registerUser(req, res, next) {
  return authHelpers
    .createUser(req)
    .then(response => {
      passport.authenticate("local", (err, user, info) => {
        if (user) {
          res.status(200).json({
            status: "success",
            data: user,
            message: "Registered one user"
          });
        }
      })(req, res, next);
    })
    .catch(err => {
      res.status(500).json({
        error: err,
        detail: err.detail
      });
    });
}

function loginUser(req, res, next) {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.log(err);
      res.status(500).send("error while trying to log in");
    } else if (!user) {
      res.status(401).send("invalid username/password");
    } else if (user) {
      req.logIn(user, function(err) {
        if (err) {
          res.status(500).send("error");
        } else {
          res.status(200).send(user);
        }
      });
    }
  })(req, res, next);
}

function insertUserCoords(req, res, next) {
  return db.none(
    'INSERT INTO userlocation (user_id, latitude, longitude) VALUES(${user_id}, ${latitude}, ${longitude});',
    {
      user_id: req.body.user_id,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    }
  )
  .then(data => {
    res.json('success')
  })
  .catch(error => {
    res.json(error)
  })
}

module.exports = {
  registerUser,
  loginUser,
  insertUserCoords
}
