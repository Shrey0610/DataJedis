const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')
const path = require('path')
const User = require("./packages/models/userMessage")
const Register = require("./packages/models/register")
const TemplatePath = path.join(__dirname,staticPath,"/Users/shreyshah/Documents/web_development/DetaJedi2copy/Intellicourse/templates");
require("./packages/db/conn")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(staticPath));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../templates/index.html'))
})

app.get('/features',(req,res)=>{
    res.sendFile(path.join(__dirname,'./templates/features.html'))
})

app.get('/pricing',(req,res)=>{
    res.sendFile(path.join(__dirname,'./packages/templates/pricing.html'))
})

app.get('/resources',(req,res)=>{
    res.sendFile(path.join(__dirname,'./packages/templates/resources.html'))
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

app.post("/models/register.js", async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmPassword;
        if (password === cpassword) {
            const registerUser = new Register(req.body);
            await registerUser.save();
            res.status(201).redirect("/templates/login.html");  // Redirect to the login page
        } else {
            res.send("Password does not match");
        }
    } catch (error) {
        // Check for duplicate key error (code 11000)
        if (error.code === 11000) {
            res.redirect("/templates/login.html");  // Redirect to the login page on duplicate key error
        } else {
            res.status(400).send(error);
        }
    }
});




app.post("/js/login.js", async (req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        const userEmail = await Register.findOne({email});
        if(userEmail.password === password){
            res.status(201).render("/templates/login.html");
        }else{
            res.send("Invalid credits");
        }


    } catch (error) {
        res.status(400).send("Invalid credientials")
    }
})
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})

