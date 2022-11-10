import { user } from '../models/user.js';
import { generateToken } from '../utils/tokenManager.js';
import bcrypt from 'bcryptjs';

export const createUser = (req, res) => {
    const body = req.body;
    user.findOne({
        where: { user: body.user}
    }).then(User => {
        if(User) {
            return res.status(400).json({ error: "Username already exists. Please, login."})
        } else{
            user.create(body).then(user => {
                user['password'] = 'hashed'
                res.status(201).json(user);
            })
            .catch(err => {
                return res.status(400).json({error: `Invalid element(s) ${err}`})
            })
        }
    }) .catch(err => {
        return res.status(400).json({error: `Invalid element(s) ${err}`})
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

export const getUsers = async (req, res) => {
    const id = req.params.id;
    const result = await user.findAll();
    res.status(200).json(result);
}

export const updateUser = (req, res) => {
    const id = req.params.id;
    const userUpdate = req.body;
    const password = userUpdate['password'];
    if(password) {
        const salt = bcrypt.genSaltSync()
        let hashed = bcrypt.hashSync(password, salt)
        userUpdate['password'] = hashed;
        user.update(userUpdate, {where: {id}})
        .then(updated => {
            user.findByPk(id)
            .then(updated => {
                updated['password'] = 'hashed'
                res.status(200).json(updated);
             })
        })
        .catch(err => {
            res.status(400).json({error: "Invalid data"})
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
            res.status(400).json({error: "Invalid data"})
        })
    }
}


export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const deleted = user.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}

