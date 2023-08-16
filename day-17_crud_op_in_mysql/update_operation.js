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

        // Update operation
        const userIdToUpdate = 1;
        const updatedUserData = { name: 'Updated Name', email: 'updated@example.com' };
        conn.query('UPDATE users SET ? WHERE id = ?', [updatedUserData, userIdToUpdate], (err, results) => {
        if (err) throw err;
        console.log('User updated:', results.affectedRows);
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



