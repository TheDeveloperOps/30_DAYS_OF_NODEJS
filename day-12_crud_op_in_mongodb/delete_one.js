const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url)
  .then((client) => {
    const db = client.db('mydbfirst');

    const query = { name: 'bala murugan' };

    return db.collection('webusers').deleteOne(query);
  })
  .then((result) => {
    if (result.deletedCount > 0) {
      console.log('Document deleted successfully');
    } else {
      console.log('No documents matched the query');
    }
  })
  .catch((err) => {
    console.error('Error:', err);
  });