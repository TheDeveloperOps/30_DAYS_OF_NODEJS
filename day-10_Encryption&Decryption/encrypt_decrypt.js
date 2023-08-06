var crypto = require('crypto'),algorithm = 'aes-256-ctr',passoword = 'balamurugan'


function encrypt(text){
    var cipher = crypto.createCipher(algorithm,passoword)
    var crypted = cipher.update(text,'utf-8','hex')
    crypted += cipher.final('hex')
    return crypted 
}

function decrypt(text){
    var decipher = crypto.createDecipher(algorithm,passoword)
    var dec = decipher.update(text,'hex','utf-8')
    dec += decipher.final('utf-8')
    return dec
}

var text = "Hello all this is bala murugan, I'm learning nodejs"

var e = encrypt(text)
console.log(e)

var d = decrypt(e)
console.log(d)
