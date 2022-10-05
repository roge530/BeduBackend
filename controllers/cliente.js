const Cliente=require('../models/cliente');

async function signUp(req, res){
    const body = req.body;
    try { 
        const cliente = await Cliente.create(body)
        const {salt, hash }= Cliente.createPassword(body['password']);
        cliente.password_salt=salt;
        cliente.password_hash=hash;
        await cliente.save();
        res.status(201).json(cliente);
    } catch (err) {
        if (["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(err.name) ) {
            return res.status(400).json({
                error: err.errors.map(e => e.message),
                test: "no c q pasa"
            })
        } else {
            throw err;
    
        }
    }
}

async function logIn(req, res){
    
    const body =req.body;
    const cliente = await Cliente.findOne({where:{ email: body['email']}});
    if (!cliente){
        return res.status(404).json({error: "Cliente no encontrado"});

    }
    if (Cliente.validatePassword(body['password'],cliente.password_salt,cliente.password_hash)){
        return res.status(200).json ({mensaje:"Bienvenido"});
    }else{
        return res.status(400).json({mensaje: "Password Incorrecto"})
    }
}
module.exports={
        signUp,
        logIn
};