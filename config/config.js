//import .env amd mysql
require('dotenv').config();
const {createConnection} = require('mysql');

//connection
let connect = createConnection({
    host: process.env.DBhost,
    user: process.env.DBuser,
    password: process.env.DBpass,
    port: process.env.DBport,
    database: process.env.DBname,
    multipleStatements: true
});

module.exports = connect;