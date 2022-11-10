import { Customer } from '../models/customer.js'
import { generateToken } from '../utils/tokenManager.js';
import bcrypt from 'bcryptjs';

export const signUp = (req, res) => {
    const body = req.body;
    Customer.findOne({
        where: {
            email: body.email
        }
    }).then(customer => {
        if(customer) {
            return res.status(400).json({ error: "Email already registered. Please, login."})
        }
        else{
            Customer.create(body).then(customer => {
                customer['password'] = 'hashed'
                res.status(201).json(customer);
            }) .catch(err => {
                        return res.status(400).json({error: "Invalid data"})
                    })
        }
    })
}

export const logIn = (req, res) => {
    const body = req.body;
    if(body['email'] && body['password']){
        Customer.findOne({where: {email: body['email']}})
            .then(result => {
                if(!result) {
                    return res.status(404).json({error: "Customer not found"})
                }
                bcrypt.compare(body['password'], result['password'], function(err, res1) {
                    if(err){
                        return res.status(400).json({error: "Incorrect email or password"})
                    }
                    if(res1){
                        const {token, expiresIn} = generateToken(result.id)
                        return res.json({email: result['email'], token, expiresIn})
                    } else {
                        return res.status(400).json({error: "Incorrect email or password"})
                    }
                })
            }).catch(err => {
                return res.status(400).json({error: "Incorrect email or password"})
            })

    }
}