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

        // Delete operation
        const userIdToDelete = 1;
        conn.query('DELETE FROM users WHERE id = ?', userIdToDelete, (err, results) => {
        if (err) throw err;
        console.log('User deleted:', results.affectedRows);
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



