const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "",
  database: "task_manager",
  multipleStatements: true,
});

module.exports = connection;
