# Day 7
# ALL ABOUT NPM 

## WHAT IS NPM ?
**NPM stands for node package manager. It is a package manager for node.js application. It helps you to install, update, remove and publish packages. Node.js package ecosystem is teh world's largest ecosystem of open source online libraries. We never have to write a already existing code again which reduces the effort of the programmers up to a large extent and they can focus on solving the unsolved problems instead of rewriting the same code again and again.**

## Installing NPM 
**Installing npm automatically : NPM is installed automatically by downloading node.js. You can download node.js [here](https://nodejs.org/en/download) .

**Installing npm manually : We can also install npm manually. You can get the file from the link given below :**
https://registry.npmjs.org/npm/-/npm-{version}.tgz

**All you have to do is change the version number just like the example given below : https://registry.npmjs.org/npm/-/npm-5.4.2.tgz**

## Updating NPM
**NPM updates comes more frequently as compared to node.js and we can't download node.js again and again just to update npm. So we have to make sure that we are using the latest version of npm . We can update a npm using the following command :**

`>npm install npm@latest -g`
`>npm -v`

## What is package.json
1. `package.json` is way to manage the locally installed packages.
2. `package.json` serves as documentation on which our project depends.
3. It is kind of directory which keeps track of all the dependencies our project is using.
4. It allows us to specify the version of packages our project is using. This is achieved using semantic versioning rules.

*`Create package.json`: We can create a package.json file using `npm init` command*

```
>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install ` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodejsera)
version: (1.0.0)
description:
entry point: (arrays.js)
test command:
git repository:
keywords:
author: @rajatgarian
license: (ISC)
About to write to \package.json:

{
  "name": "scripts",
  "version": "1.0.0",
  "description": "",
  "main": "arrays.js",
  "dependencies": {
    "body-parser": "^1.17.2",
    "express": "^4.15.4",
    "ejs": "^2.5.7",
    "express-fileupload": "^0.1.4",
    "nodemailer": "^4.1.0",
    "natural": "^0.5.4",
    "prettyjson": "^1.2.1"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "@rajatgarian",
  "license": "ISC"
}


Is this ok? (yes) yes
```

## npm Install 
**If we are having a package.json file in our project , then we can install all our dependencies using just npm install command. Example for the same is given below ::**
`>npm install`
*It will install all the dependencies mentioned in package.json file.*

## Installing packages via NPM
*2 Ways in which we can install our packages.*

1. `Locally (Local installation ) :` We install packages locally when we need to require them in our application for example express, gannit , etc. The syntax for downloading a package locally is : `npm install < package_name >` .
Example for the same is given below ::

`>npm install gannit`

2. Globally (Global installation) : We install packages globally when we want to use it as a command line tool or run it in the background for example forever, grunt-cli, etc. The syntax for global download of packages is : npm install -g < package_name > .

`>npm install -g forever`

## Installing specific version of a package

1. **You know the exact version**: If you know the exact version of the npm package you want to install , then it can be downloaded using the package_name with @ character. The Syntax is npm install package_name@version . The snippet is given below :
`>npm install express@4.15.1`

2. **You don't know the exact version** : If you don't know the exact version of the npm package you want to install , then it can be downloaded using the semantic range npm provides. Suppose you want to install the latest version of the 4th major release say , 4.1.15 then you can download it in the following way : The Syntax is `npm install package_name@^major_version.0.0` . The snippet is given below :

`>npm install express@^4.00`

## updating and removing a package
1. updating local packages : We should keep our packages updated in order to keep track of the changes that have been made to the code upstream of the packages so that we can mould our code as per the latest version. The syntax for Updating local packages is : `npm update `.

`>npm update`

2. Removing Local Packages : We can remove the local packages when we do not need them further in our application. The syntax for removing a package locally is : `npm uninstall < package_name > `.

`>npm uninstall gannit`

3. Uninstall global package: We can remove the global packages the simply running `npm uninstall` command globally. The syntax for global download of packages is : `npm uninstall -g < package_name >`.

`>npm uninstall -g forever`