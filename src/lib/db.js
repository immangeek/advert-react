const mysql = require("mysql");

const db = mysql.createPool({
  host: "data.cgicw6bycxhj.us-east-2.rds.amazonaws.com",
  user: "root",
  password: "advert.123",
  database: "3D_Data",
});

module.exports = db;
