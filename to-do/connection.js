const mysql = require("mysql");
const connection = mysql.createConnection({
//   connectionid: "189370",
  host: "localhost",
  user: "root",
  password: 'WhatyouwantfromMe!1',
  database: "to-do",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});
