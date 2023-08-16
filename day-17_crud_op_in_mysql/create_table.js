var mysql = require('mysql'); 
var conn = mysql.createConnection({ 
  host: "localhost",
  user: "root", 
  password: "" 
}); 

conn.connect(function(err) { 
  if (err) throw err; 
  console.log("Connected to MySQL server");

  // Create the database
  conn.query("CREATE DATABASE IF NOT EXISTS newdb", function (err, result) { 
    if (err) throw err; 
    console.log("Database is created or already exists");

    // Use the new database
    conn.query("USE newdb", function (err) {
      if (err) throw err;
      console.log("Using newdb database");

      // Create the table
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL
        )
      `;

      // Execute the create table query
      conn.query(createTableQuery, (err, results) => {
        if (err) throw err;
        console.log('Table created or already exists:', results);
      });

      // Close the connection when done
      conn.end((err) => {
        if (err) {
          console.error('Error closing MySQL connection:', err);
          return;
        }
        console.log('MySQL connection closed');
      });
    });
  });
});
