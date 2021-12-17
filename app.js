const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');



const app = express();

//const User=require('./models/userSchema');

dotenv.config({path:'./config.env'});
require('./db/conn');

const PORT=process.env.PORT;


app.get('/' , (req,res)=>{
    res.send("Hello World from server app.js");
});

app.get('/login' , (req,res)=>{
    res.send("Hello World On Login Page");
});

app.get('/register' , (req,res)=>{
    res.send("Hello World On Signup Page");
});

app.get('/about' , (req,res)=>{
    res.send("Hello World On About Page");
});


app.listen(PORT , ()=>{
    console.log(`Server started on port ${PORT}`);
})