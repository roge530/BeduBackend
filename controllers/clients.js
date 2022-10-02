if (process.env.NODE_ENV != 'production') {
  dotenv.config()
}

import * as dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { Clients } from '../models/Clients.js'


export const registerClient = async (req, res) => {
  const password = await bcrypt.hash(req.body.password, 10)

  const client = await Clients.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    password: password
  })

  const token = jwt.sign({user: client}, process.env.SECRET_KEY)
  res.json(client)
}


