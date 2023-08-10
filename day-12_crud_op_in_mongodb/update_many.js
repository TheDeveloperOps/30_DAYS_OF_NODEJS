const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url)
  .then((client) => {
    const db = client.db('mydbfirst');

    const query = {}; // Empty query to match all documents
    const update = { $set: { weather: 'sunny', day: 'sunday' } };

    return db.collection('webusers').updateMany(query, update);
  })
  .then((result) => {
    if (result.modifiedCount > 0) {
      console.log('Documents updated successfully');
    } else {
      console.log('No documents matched the query');
    }
  })
  .catch((err) => {
    console.error('Error:', err);
  });
