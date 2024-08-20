const express = require("express");
const dotenv = require("dotenv");
const app= express();

dotenv.config();

const port = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("Vennai 🧈 🧈")
})

app.listen(port,()=>{
    console.log(`Listening on ${port} ✌️ ✌️`)
})