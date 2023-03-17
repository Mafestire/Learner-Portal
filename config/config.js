//import .env amd mysql
require("dotenv").config();
const { createPool } = require("mysql");

//connection
let connect = createPool({
  host: process.env.DBhost,
  user: process.env.DBuser,
  password: process.env.DBpass,
  port: process.env.DBport,
  database: process.env.DBname,
  multipleStatements: true,
  connectionLimit: 30,
});

module.exports = connect;
