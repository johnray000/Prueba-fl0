var express = require("express");
var app = express();
const PORT = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.send("probando  ")
})

app.listen(PORT,()=>console.log('escuchando en:',PORT))