import {Cliente} from '../models/cliente.js'
import { generateToken } from '../utils/tokenManager.js';

export const signUp = async (req, res) => {
    const body = req.body;
    try { 
        const findCliente = await Cliente.findOne({where:{ email: body['email']}});
        if (findCliente) return res.status(409).json({error: 'El correo ya esta en uso'})

        const cliente = await Cliente.create(body)
        cliente.password_salt='1';
        cliente.password_hash='2';
        await cliente.save();
        res.status(201).json(cliente);
    } catch (err) {
        if (["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(err.name) ) {
            return res.status(400).json({
                error: err.errors.map(e => e.message)
            })
        } else {
            throw err;
    
        }
    }
}

export const logIn = async (req, res) => {
    const body = req.body;
    console.log(body)
    try {
        if (body['email'] == undefined) return res.status(411).json({error: "No se puede usar un vacio"});
        const cliente = await Cliente.findOne({where:{ email: body['email']}});
        if (!cliente){
            return res.status(404).json({error: "Cliente no encontrado"});
        }
        const {token, expiresIn} = generateToken(cliente.id)
        return res.json({token, expiresIn})
    }
    catch (err) {
        throw err;
    }
}

export const seeInfo = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.uid)
        return res.status(200).json({email: cliente.email})
    } catch (error) {
        return res.status(500).json({error: 'error del servidor'})
    }
}