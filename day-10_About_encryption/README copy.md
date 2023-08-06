# Day 8
# PUBLISHING PACKAGES ON NPM

**Data that can be read and understood easily is know as plain text. The problem with plain text is that everyone can read it. But sometimes we don't want everyone to have the access to rea the data i.e. the confidentiality of the data needs to be maintained.**

`Encryption`**: It deals with providing confidentiality to the data so that only authorize personnel have access to the data. In encryption, plain text is transformed to an unintelligible text with the help of `key` and `algorithm` which we can read but can not understand due to which the confidentiality of the data is protected. The unintelligible text is called `ciphertext`**.

`Decryption`:**Decryption is the process of rendering the data , so that it can be changed into a human or machine readable and understandable form. It takes the cipher text as input and converts it into the plain text with the help of `key` and `algorithm`**

## Types of Encryption
**There are 2 ways to encrypt and decrypt the content which are explained in detail below:**

1. SYMMETRIC OR PRIVATE KEY ENCRYPTION:
**In symmetric , same key is used to perform encryption and decryption. It is fast as compared to asymmetric.**

`Scenario`:
- Mr.A wants to send a confidential message to Mr.X
- Mr.H in sitting in between monitoring all the messages transmit by Mr.A
- So, Mr.A encrypted the message with his private key and transmits the message. Now further there are 2 possibilities :
1. The message is safely received by Mr. X who decrypted it using the same key with which the message was encrypted by Mr.A
2. Mr. H got the message but as Mr.H does not have the key with which the message is encrypted, so he can not decrypt it and hence the confidentiality of the message is retained.

2. ASYMMETRIC OR PUBLIC KEY ENCRYPTION:
**In asymmetric , we use a pair of keys to perform encryption and decryption. In simple words, key which is used to encrypt is different from the key which is used to decrypt. The key pair can be generated using openSSL or any other key pair generator. The key pair consist of a public key and a private key. Public key is known to all however the private key is only known to the person whom it belongs.For the problems Asymmetric encryption solves consider the following scenarios:**

`Scenario 1`:
- Rj wants to send a confidential message to Mr.X
- Mr.H in sitting in between monitoring all the messages transmit by Rj
- So, Rj encrypted the message with his private key and transmits the message. Now further there are 2 possibilities :
1. The message is safely received by Mr. X who decrypted it using Rj's public key.
2. Mr. H got the message and decrypted it using Rj's Public key. But now Mr.H can not encrypt it again because Mr.H is not having Rj's Private key and when the message reaches its actual destination that is to Mr.X , Mr.X will get to know that the confidentiality of the message is breached and hence the information provided by the message can not be trusted.
- Hence either the message is received by actual receiver with it's confidentiality retained or we get to know that the confidentiality is breached.

`Scenario 2`:
- Now Mr. X wants to inform Rj that the confidentiality of the message is breached but he does not want Mr.H to know about it.
- So Mr. X encrypted the message using the public key of Rj,which can now only be decrypted using the private key of Rj.
- If Mr.H somehow even got the reply send by Mr.X to Rj , then also he can't decrypt it because the private key is only with Rj.

## Symmetric Encryption and Decryption

**Encryption using `createCipher` and decryption using `createDecipher` inbuilt methods : Same key is used for both encryption and decryption.**

```
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

```
*OUTPUT*
![Alt text](image.png)

## Asymmetric Encryption and Decryption
**Also known as public key encryption, we use different key for decryption from the one we used for encryption. There are 2 possibilities which are explained with code snippets below :**

1. public key used for encryption and private key for decryption:

```
/** 
    Example of Asymmetric encryption
    Encrypting using public key and decrypting using private key
    File Name : enc-pub-dec-priv.js
    Author : @nodejsera
 **/
//Including the required modules
var crypto = require('crypto');
var fs = require('fs');

//Reading the Public Key
pubK = privK = fs.readFileSync('pub.key').toString();

//Passing the text to be encrypted using private key
var buf = Buffer.from('This is secret code', 'utf8');

//Encrypting the text
secretData = crypto.publicEncrypt(pubK, buf);
//printing the encrypted text
console.log(secretData.toString('utf8'));
//reading the Private key
privK = {
    key: fs.readFileSync('priv.key').toString(),
    passphrase: 'nodejsera'
}
//decrypting the text using public key
origData = crypto.privateDecrypt(privK, secretData)
//Printing the original content
console.log(origData.toString());
```

2. Private key used for encryption and public key for decryption
```
 /** 
    Example of Asymmetric encryption
    Encrypting using private key and decrypting using public key
    File Name : enc-priv-dec-pub.js
    Author : @nodejsera
 **/
//Including the required modules
var crypto = require('crypto');
var fs = require('fs');

//Reading the Private Key
privK = {
    key: fs.readFileSync('priv.key').toString(),
    passphrase: 'nodejsera'
}
//Passing the text to be encrypted using private key
var buf = Buffer.from('rishabh', 'utf8');

//Encrypting the text
secretData = crypto.privateEncrypt(privK, buf);
//printing the encrypted text
console.log(secretData.toString('utf8'));
//reading the Public key
pubK = fs.readFileSync('pub.key').toString();
//decrypting the text using public key
origData = crypto.publicDecrypt(pubK, secretData)
//Printing the original content
console.log(origData.toString());
									
```