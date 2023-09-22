const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const hbs = require('hbs')
const path = require('path')
const User = require("./packages/models/userMessage")
const Register = require("./packages/models/register")
require("./packages/db/conn")

app.use(express.static('packages'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./packages/templates/index.html'))
})

app.get('/features',(req,res)=>{
    res.sendFile(path.join(__dirname,'./packages/templates/features.html'))
})

app.get('/pricing',(req,res)=>{
    res.sendFile(path.join(__dirname,'./packages/templates/pricing.html'))
})

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'./packages/templates/contact.html'))
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'./packages/templates/login.html'))
})

app.get('/getstarted',(req,res)=>{
    res.sendFile(path.join(__dirname,'./packages/templates/getstarted.html'))
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})

