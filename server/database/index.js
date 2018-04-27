var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost/unearthdb";
var db = pgp(connectionString);

module.exports = db;
