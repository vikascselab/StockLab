require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const app = express();


app.get("/",(req,res)=>{
  res.send("jai shree ram")
})

app.listen(PORT, () => {
  console.log("App started!");
  console.log(`Port working at ${PORT} `)
 mongoose.connect(url);
  console.log("DB started!");
});
