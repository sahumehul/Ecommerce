const express = require("express");
require("./db/config");
const cors = require("cors");
const User = require("./db/user");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());
app.use(cors())

app.post("/register",(req,res)=>{

    const {name,email,password} = req.body;

    bcrypt.hash(password,15).then(hashpass=>{
        const userData = new User({
            name,
            email,
            password : hashpass
        })
        userData.save().then(result=>{
            res.status(200).json({
                message : "user created",
                data : result
            })
        }).catch(err=>{
            res.status(409).json({
                message : "email already exist",
                data : err
            })
        })
    }).catch(err=>{
        res.status(500).json({
            message : "Internal server error",
            data : err
        })
    })
})

app.post("/login",(req,res)=>{

    const loginData = req.body;

    User.findOne({email : loginData.email}).then(loginuser=>{
        if(loginuser){
            bcrypt.compare(loginData.password,loginuser.password).then(response=>{
                if(response){
                    const jwtToken = jwt.sign({
                        email : loginuser.email,
                        id : loginuser._id
                    },
                    "Mehulsahu",{
                        expiresIn : "24h"
                    })
                    res.status(200).json({
                        message : "Login credential matched",
                        token : jwtToken,
                        name : loginuser.name,
                        email : loginuser.email
                    })
                }else{
                    res.status(403).json({
                        message : "login credential mismatched",
                    })
                }
            })
        }else{
            res.status(401).json({
                message : "password required"
            })
        }
    }).catch(err=>{
        res.status(500).json({
            message : "internal server error",
            data : err
        })
    })
})

app.listen(5000)