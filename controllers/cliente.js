import {Cliente} from '../models/cliente.js'

export const signUp = async (req, res) => {
    const body = req.body;
    try { 
        const cliente = await Cliente.create(body)
        cliente.password_salt='1';
        cliente.password_hash='2';
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

export const logIn = async (req, res) => {
    
    const body =req.body;
    const cliente = await Cliente.findOne({where:{ email: body['email']}});
    if (!cliente){
        return res.status(404).json({error: "Cliente no encontrado"});

    }
}
