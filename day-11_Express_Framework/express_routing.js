var express = require('express')
var app = express()

app.get('/',(req,res)=>{
    res.send('SIMPLE EXAMPLE OF ROUTES')
})

app.get('/signup',(req,res)=>{
    res.send('This is demo route for sign up page')
})

app.get('/signin',(req,res)=>{
    res.send("this is the sample route for signin")
})

app.get('/signin/dashboard',(req,res)=>{
    res.send("You are in the dashboard route.")
})

app.listen(3000,()=>{
    console.log("Server is up and running on port 3000")
})