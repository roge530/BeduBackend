import {usuario } from '../models/usuario.js';
import { generateToken } from '../utils/tokenManager.js';
import bcrypt from 'bcryptjs';

export const createUsuario = (req, res) => {
    const body = req.body;
    bcrypt.hash(body['password'], 8)
        .then(hashed => {
            body['password_hash'] = hashed;
            usuario.create(body).then(usuario => {
                usuario['password_hash'] = 'hashed'
                res.status(201).json(usuario);
            })
            .catch(err => {
                return res.status(400).json({error: "Elemento(s) inválidos"})
            })
        }) .catch(err => {
            return res.status(400).json({error: "Elemento(s) inválidos"})
        })
}

export const logIn = (req, res) => {
    const body = req.body;
    if(body['usuario'] && body['password']){
        usuario.findOne({where: {usuario: body['usuario']}})
            .then(resultado => {
                if(!resultado) {
                    return res.status(404).json({error: "Usuario no encontrado"})
                }
                bcrypt.compare(body['password'], resultado['password_hash'], function(err, res1) {
                    if(err){
                        return res.status(400).json({error: "Usuario o contraseña incorrecta"})
                    }
                    if(res1){
                        const {token, expiresIn} = generateToken(resultado['tipo_usuario'])
                        return res.json({email: resultado['email'], token, expiresIn})
                    } else {
                        return res.status(400).json({error: "Usuario o contraseña incorrecta"})
                    }
                })
            }).catch(err => {
                return res.status(400).json({error: "Usuario o contraseña incorrecta"})
            })

    } else {
        return res.status(400).json({error: "Usuario o contraseña incorrecta"})
    }
}

export const getUsuarios = async (req, res) => {
    const id = req.params.id;
    const result = await usuario.findAll();
    res.status(200).json(result);
}

export const updateUsuario = (req, res) => {
    const id = req.params.id;
    const usuarioUpdate = req.body;
    const password = usuarioUpdate['password'];
    if(password) {
        bcrypt.hash(password, 8)
            .then(hashed => {
                usuarioUpdate['password_hash'] = hashed;
                usuario.update(usuarioUpdate, {where: {id}})
                    .then(updated => {
                        usuario.findByPk(id).then(updated => {
                            updated['password_hash'] = 'hashed'
                            res.status(200).json(updated);
                        })
                    })
                    .catch(err => {
                        res.status(400).json({error: "Elemento(s) inválidos"})
                    })
            })
    }
    else {
        usuario.update(usuarioUpdate, {where: {id}})
        .then(updated => {
            usuario.findByPk(id).then(updated => {
                updated['password_hash'] = 'hashed'
                res.status(200).json(updated);
            })
        })
        .catch(err => {
            res.status(400).json({error: "Elemento(s) inválidos"})
        })
    }
}

export const deleteUsuario = async (req, res) => {
    const id = req.params.id;
    const deleted = usuario.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}

