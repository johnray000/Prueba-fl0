var express = require("express");
var app = express();
const PORT = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.send("probando  ")
})

app.get("/otra",(req,res)=>{
    res.send("probando otra ")
})

app.listen(PORT,()=>console.log('escuchando en:',PORT))