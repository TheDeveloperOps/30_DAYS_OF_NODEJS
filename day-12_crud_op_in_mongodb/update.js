const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url)
  .then((client) => {
    const db = client.db('mydbfirst');

    const query = { name: 'bala murugan' };
    const update = { site: '10th standard' };

    return db.collection('webusers').updateOne(query, { $set: update });
  })
  .then((result) => {
    if (result.modifiedCount > 0) {
      console.log('Document updated successfully');
    } else {
      console.log('No documents matched the query');
    }
  })
  .catch((err) => {
    console.error('Error:', err);
  });
