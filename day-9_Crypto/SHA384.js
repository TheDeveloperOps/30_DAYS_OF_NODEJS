var crypto = require('crypto')
var hash = crypto.createHash('sha384')

data = hash.update("bala murugan",'utf-8')

gen_hash = data.digest('hex')
console.log('hash '+ gen_hash)