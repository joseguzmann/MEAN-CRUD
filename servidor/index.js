const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Creamos el servidor
let app = express();

// Conectamos a la base de datos
conectarDB();
// app.use(cors());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, X-Request-With,Content-Type,Accept, Access-Control-Allow,Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    next();
});

app.use(express.json());

app.use('/api/productos', require('./routes/producto.js'));

app.listen(4000, () => {
    console.log("El servidor esta corriendo perfectamente");
});