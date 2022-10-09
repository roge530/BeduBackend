import {Cliente} from '../models/cliente.js'
import { generateToken } from '../utils/tokenManager.js';
import bcrypt from 'bcryptjs';

export const signUp = (req, res) => {
    const body = req.body;
    bcrypt.hash(body['password'], 8)
        .then( hashed => {
            body['password_hash'] = hashed;
            Cliente.create(body).then(cliente => {
                cliente['password_hash'] = 'hashed'
                res.status(201).json(cliente);
            }) .catch(err => {
                return res.status(400).json({error: "Elemento(s) inválidos"})
            })
        }) .catch(err => {
            return res.status(400).json({error: "Elemento(s) inválidos"})
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
                bcrypt.compare(body['password'], resultado['password_hash'], function(err, res1) {
                    if(err){
                        return res.status(400).json({error: "Email o contraseña incorrecta"})
                    }
                    if(res1){
                        const {token, expiresIn} = generateToken(cliente.id)
                        return res.json({token, expiresIn})
                    } else {
                        return res.status(400).json({error: "Email o contraseña incorrecta"})
                    }
                })
            }).catch(err => {
                return res.status(400).json({error: "Email o contraseña incorrecta"})
            })

    }
}