const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url)
  .then((client) => {
    const db = client.db('mydbfirst');
    const mydata = { name: 'bala murugan', job: 'dev' };

    return db.collection('webusers').insertOne(mydata);
  })
  .then(() => {
    console.log('Document inserted');
  })
  .catch((err) => {
    console.error('Error:', err);
  });
