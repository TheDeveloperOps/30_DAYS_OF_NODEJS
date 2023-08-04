//Loading the crypto module in node.js
var crypto = require('crypto');
//creating hmac object 
var hmac = crypto.createHmac('whirlpool', 'yoursecretkeyhere');
//passing the data to be hashed
data = hmac.update('BALA MURUGAN');
//Creating the hmac in the required format
gen_hmac= data.digest('hex');
//Printing the output on the console
console.log("hmac : " + gen_hmac);