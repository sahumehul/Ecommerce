const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL).then((res)=>{
    console.log("Connected to Db");
}).catch((err)=>{
    console.log(err);
})