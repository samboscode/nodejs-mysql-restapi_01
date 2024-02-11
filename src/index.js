import { PORT } from './config.js';
import app from './app.js';
//const PUERTO = 3000;
app.listen(PORT,()=>{
    console.log(`Escuchando en el puero : ${PORT}`);
})

