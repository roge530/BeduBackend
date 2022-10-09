import {Cliente} from '../models/cliente.js'
import { generateToken } from '../utils/tokenManager.js';
import bcrypt from 'bcryptjs';

export const signUp = (req, res) => {
    const body = req.body;
    bcrypt.hash(body['password'], 8)
        .then( hashed => {
            body['password'] = hashed;
            Cliente.create(body).then(cliente => {
                cliente['password'] = 'hashed'
                res.status(201).json(cliente);
            }) .catch(err => {
                return res.status(400).json({error: "Elemento(s) inválidos A"})
            })
        }) .catch(err => {
            return res.status(400).json({error: "Elemento(s) inválidos B"})
        })
}

export const logIn = (req, res) => {
    const body = req.body;
    if(body['email'] && body['password']){
        Cliente.findOne({where: {email: body['email']}})
            .then(resultado => {
                if(!resultado) {
                    return res.status(404).json({error: "Cliente no encontrado"})
                }
                bcrypt.compare(body['password'], resultado['password'], function(err, res1) {
                    if(err){
                        return res.status(400).json({error: "Email o contraseña incorrecta"})
                    }
                    if(res1){
                        const {token, expiresIn} = generateToken(resultado.id)
                        return res.json({email: resultado['email'], token, expiresIn})
                    } else {
                        return res.status(400).json({error: "Email o contraseña incorrecta"})
                    }
                })
            }).catch(err => {
                return res.status(400).json({error: "Email o contraseña incorrecta"})
            })

    }
}