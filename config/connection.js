// require mysql
var mysql = require("mysql");

// create the connection to the mysql database
var connection = mysql.createConnection({
  host: "nuskkyrsgmn5rw8c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com" || "localhost",
  port: 3306,
  user: "ai63o4g093ipfdha" || "root",
  password: "ima6rtmkm98ef2zl" || "root",
  database: "burgers_db"
});

// connect the database connection to the server
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// export the connection
module.exports = connection;
