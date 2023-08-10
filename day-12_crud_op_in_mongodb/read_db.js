const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

MongoClient.connect(url)
    .then((client)=>{
        const db=client.db('mydbfirst')
        return db.collection('webusers').findOne({name:'bala murugan'})
    })
    .then((result)=>{
        if(result){
            console.log('Found users:',result)
        }
        else{
            console.log('user not found')
        }
    })
    .catch((err)=>{
        console.log('err',err)
    })