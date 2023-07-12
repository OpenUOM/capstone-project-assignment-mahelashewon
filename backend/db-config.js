const knex = require("knex")
const config = require("../knexfile")
const testBase = require("../backend/test/testBase");
const dbConnection = require("./sqlite");

let db = null
if (process.env.NODE_ENV === "test") {
  console.log("TEST DB")
  db = knex(config.test)
  testBase.resetDatabase(db);
} else if (process.env.NODE_ENV === "test-backend") {
  console.log("TEST DB")
  db = knex(config.test)
}else {
  console.log("DEV DB")
  db = knex(config.development)
}

module.exports = db

dbConnection
  .getDbConnection()
  .then((db) => {
    Infinity(db);
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

let _db;

function init(db) {
  _db = db;
}

const knex_db = require("./db-config");