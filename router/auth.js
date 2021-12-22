const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');


const authenticate = require("../middleware/authenticate");

require('../db/conn');
const User = require("../models/userSchema");

router.get('/' , (req,res)=>{
    res.send("Hello World from router app.js");
});

// router.post('/register', (req,res)=>{
//     console.log(req.body);
//     res.json({message:req.body});
//     //res.send("mera register page");
// });

//using promises 

// router.post('/register', (req,res)=>{

//      const {name,email,phone,password,cpassword}=req.body;

//      if(!name || !email || !phone  || !password || !cpassword){
//          return res.status(422).json({error:"All details are required"});
//      }

//      User.findOne({email:email})
//      .then((userExist) =>{
//          if(userExist){
//             return res.status(422).json({error:"Email Already exist"});
//          }
//          const user =new User({name,email,phone,password,cpassword});

//         user.save().then(() =>{
//             res.status(201).json({ message :"user registered succesfully "})
//         }).catch( () => res.status(500).json({error:"Failed To register"}));
//         }).catch((err) => {console.log(err); });
// });

router.post('/register', async (req, res) => {

    const {
        name,
        email,
        phone,
        password,
        cpassword
    } = req.body;

    if (!name || !email || !phone  || !password || !cpassword) {
        return res.status(422).json({
            error: "All details are required"
        });
    }


    try {
        const userExist = await User.findOne({
            email: email
        });

        if (userExist) {
            return res.status(422).json({
                error: "Email Already exist"
            });
        }

        const user = new User({
            name,
            email,
            phone,
            password,
            cpassword
        });

        const userRegister=await user.save();
       //console.log(user);
        //console.log(userRegister);
        res.status(201).json({
            message: "user registered succesfully "
        })
    } catch (err) {
        console.log(err);
    }
});

//login route

router.post('/signin', async (req, res) => {
    try {
        let token;
        const {
            email,
            password
        } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                error: "Incompete Details"
            });
        }

        const userLogin = await User.findOne({
            email: email
        });
        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);
            
             token = await userLogin.generateAuthToken();
             
             res.cookie("jwtoken",token,{
                 expires:new Date(Date.now() + 25892000000),
                 httpOnly:true
             });
            if (!isMatch) {
                res.status(400).json({
                    error: "Invalid Credentials"
                });
        }else{
            res.json({
                message: "SignIn Successfull"
            });
        }
        } else {
            res.status(400).json({
                error: "Invalid Credentials"
            });
            
        }
    } catch (err) {
        console.log(err);

    }

});

router.get('/about' ,authenticate, (req,res)=>{
    res.send("Hello World On About Page");
});


module.exports = router;
