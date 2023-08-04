// Loading the crypto module in node.js
var crypto = require('crypto')

// creating hash object
var hash = crypto.createHash('md5')

// passing data to be hashed 
data = hash.update("BALA MURUGAN",'utf-8')

// Creating the hash in the required format
gen_hash = data.digest('hex')

console.log(gen_hash)