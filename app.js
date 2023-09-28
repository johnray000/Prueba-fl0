import express from "express";
var app = express();
const PORT = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.set({'Content-Type': 'text/plain'})
    res.send(`Hola, mundo! ${Date.now()}`)
})

app.get("/otra",(req,res)=>{
    res.send("probando otra ")
})

app.listen(PORT,()=>console.log('escuchando en:',PORT))