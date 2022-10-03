if (process.env.NODE_ENV != 'production') {
  dotenv.config()
}
import * as dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { Clients } from '../models/Clients.js'
import { Pets } from '../models/Pets.js'
import { Appointments } from '../models/Appointments.js'

export const registerClient = async (req, res) => {
  try {
    const password = await bcrypt.hash(req.body.password, 10)

    const client = await Clients.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      password: password
    })

    res.json(client)

  } catch(err) {
    res.sendStatus(401)
  }
}

export const registerLogin = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) return res.status(400).json({error: "Invalid field name"})

  const client = await Clients.findOne({
    where: {
      email
    }
  }) 

  if (client == null) {
    res.status(400).json({error: "User not found"})
  } else {
      if (await bcrypt.compare(password, client.password)) {
        const token = jwt.sign({user: email}, process.env.SECRET_KEY, {expiresIn: '1d'})
        res.send({token:token})
      } else {
        res.status(401).json({error: "Incorrect password"})
    }
  }  
}

export const registerPet = async (req, res) => {
  const { pet_name, race, day, time } = req.body 
  const { id_client } = await Clients.findOne({
    where: {
      email: req.user
    }
  })

  const pet = await Pets.create({
    pet_name,
    race,
    owner: id_client
  })

  const { id_pet } = pet

  const appointment = await Appointments.create({
    day,
    time,
    arrival: id_pet
  })

  const response = {
    pet_name: pet.pet_name,
    race: pet.race,
    day: appointment.day,
    time: appointment.time,
  }

  res.json(response)
}





export const authToken = (req, res, next) => {
  const token = req.headers['authorization']
  if (token == null) res.sendStatus(401)

  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY)
    req.user = verified.user
    next()
  } catch(err) {
    res.status(400).json({error: "Invalid Token"})
  }
}

