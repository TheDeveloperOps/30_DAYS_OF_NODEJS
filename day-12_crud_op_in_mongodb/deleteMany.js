const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url)
  .then((client) => {
    const db = client.db('mydbfirst');

    const query = { weather: 'sunny' };

    return db.collection('webusers').deleteMany(query);
  })
  .then((result) => {
    if (result.deletedCount > 0) {
      console.log('Documents deleted successfully');
    } else {
      console.log('No documents matched the query');
    }
  })
  .catch((err) => {
    console.error('Error:', err);
  });
