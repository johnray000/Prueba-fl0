import express from "express";
import {dirname} from "path";
import path from "path";
import { fileURLToPath } from 'url';

var app = express();
const PORT = process.env.PORT || 3000

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware para servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

app.get("/calculo", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'calculo.html'));
  });

app.get("/prueba",(req,res)=>{
    res.set({'Content-Type': 'text/plain'})
    res.send(`Hola, mundo! ${Date.now()}`)
})

app.listen(PORT,()=>console.log('escuchando en:',PORT))