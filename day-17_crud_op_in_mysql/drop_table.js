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

        // SQL query to drop the table
        const dropTableQuery = 'DROP TABLE IF EXISTS users';

        // Execute the drop table query
        conn.query(dropTableQuery, (err, results) => {
        if (err) throw err;
        console.log('Table dropped:', results);
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







