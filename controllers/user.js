import { user } from '../models/user.js';
import { generateToken } from '../utils/tokenManager.js';
import bcrypt from 'bcryptjs';

export const createuser = (req, res) => {
    const body = req.body;
    bcrypt.hash(body['password'], 8)
        .then(hashed => {
            body['password'] = hashed;
            user.create(body).then(user => {
                user['password'] = 'hashed'
                res.status(201).json(user);
            })
            .catch(err => {
                return res.status(400).json({error: `Invalid element(s) 12 ${err}`})
            })
        }) .catch(err => {
                return res.status(400).json({error: `Invalid element(s) 13 ${err}`})
        })
}

export const logIn = (req, res) => {
    const body = req.body;
    if(body['user'] && body['password']){
        user.findOne({where: {user: body['user']}})
            .then(result => {
                if(!result) {
                    return res.status(404).json({error: "Not find user"})
                }
                bcrypt.compare(body['password'], result['password'], function(err, res1) {
                    if(err){
                        return res.status(400).json({error: "Invalid user / password"})
                    }
                    if(res1){
                        const {token, expiresIn} = generateToken(result['user_type'])
                        return res.json({email: result['email'], token, expiresIn})
                    } else {
                        return res.status(400).json({error: "Invalid user / password"})
                    }
                })
            }).catch(err => {
                return res.status(400).json({error: "Invalid user / password"})
            })

    } else {
        return res.status(400).json({error: "Invalid user / password"})
    }
}

export const getusers = async (req, res) => {
    const id = req.params.id;
    const result = await user.findAll();
    res.status(200).json(result);
}

export const updateuser = (req, res) => {
    const id = req.params.id;
    const userUpdate = req.body;
    const password = userUpdate['password'];
    if(password) {
        bcrypt.hash(password, 8)
            .then(hashed => {
                userUpdate['password'] = hashed;
                user.update(userUpdate, {where: {id}})
                    .then(updated => {
                        user.findByPk(id).then(updated => {
                            updated['password'] = 'hashed'
                            res.status(200).json(updated);
                        })
                    })
                    .catch(err => {
                        res.status(400).json({error: "Invalid element(s)"})
                    })
            })
    }
    else {
        user.update(userUpdate, {where: {id}})
        .then(updated => {
            user.findByPk(id).then(updated => {
                updated['password'] = 'hashed'
                res.status(200).json(updated);
            })
        })
        .catch(err => {
            res.status(400).json({error: "Invalid element(s)"})
        })
    }
}

export const deleteuser = async (req, res) => {
    const id = req.params.id;
    const deleted = user.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}

