var mysql = require('mysql'); 
var conn = mysql.createConnection({ 
  host: "localhost",
  user: "root", 
  password: "" 
}); 
conn.connect(function(err) { 
  if (err) throw err; 
  conn.query("CREATE DATABASE nodeapp",
  function (err, result) { 
    if (err) throw err; 
    console.log("Database is created successfully");
     }); 
});