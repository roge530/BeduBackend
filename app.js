const express = require ('express'); //Carga el modulo
const sequelize= require('./config/db'); //indica que vamos a trabajar con sequelize
const routes = require ('./routes')

const app = express();
app.use(express.json());
app.use('/', routes);

try{
    sequelize.authenticate();//trata de logearse 
    sequelize.sync();
    console.log('Connected to DB');
}catch{
    console.log('Unable to connect to DB:' , error);
}

const PORT=3000; //process.env.PORT

app.listen(PORT, ()=>{
    console.log("Server listening on PORT 3000");
}); //Funcion que se ejecuta cuando el puerto empieza a escuchar

