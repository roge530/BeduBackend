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

    const { id_client, first_name, last_name, email, phone } = await Clients.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      password: password
    })


    res.json({
      id_client,
      first_name,
      last_name,
      email,
      phone
    })

  } catch(err) {
    res.sendStatus(401)
  }
}

export const setUser = async (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    res.status(400).json({error: "An email and password needed to login"})
  } else {
    req.client = await Clients.findOne({
      where: {
        email
      }
    })
  }

  next()
}

export const authUser = async (req, res, next) => {
  if (req.client == null) {
    res.status(403)
    return res.json({error: "User not found"})
  }
  next()
}

export const authPassword = async (req, res) => {
  const { password } = req.body

  if (await bcrypt.compare(password, req.client.password)) {
    const token = jwt.sign({username: req.client.email}, process.env.SECRET_KEY, {expiresIn: '1h'})
    res.json({
      token:token,
      username: req.client.email
    })
  } else {
    res.status(401).json({error: "Incorrect password"})
  }
}

export const authToken = (req, res, next) => {
  const token = req.headers['authorization'].split(' ')[1]

  if (token == null) res.sendStatus(401) 

  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY)
    req.verified = verified.username
    next()
  } catch(err) {
    res.status(400).json({error: "Expired Token"})
  }
}

export const authEmail = (req, res, next) => {
  const { username } = req.body

  if (username == req.verified) {
    next()
  } else {
    res.status(403).json({error: "Not authorized"})
  }
}

export const registerPet = async (req, res) => {
  try {
    const { pet_name, race } = req.body 

    const { id_client } = await Clients.findOne({
      where: {
        email: req.body.username
      }
    })

    const pet = await Pets.create({
      id_client,
      pet_name,
      race
    })

    res.json(pet)

  } catch(err) {
    res.status(400).json({error: "No user found"})
  }
}


export const registerAppointment = async (req, res) => {
 
  try {
    const { day, time } = req.body

    const appointment = await Appointments.create({
      id_pet: req.params.id_pet,
      day,
      time
    })

    res.json(appointment)

  } catch(err) {
    res.status(400).json({error: "Pet not found"})
}
}

export const appointments = async (req, res) => {

  const appointments = await Clients.findOne({
    attributes: ['id_client', 'first_name', 'last_name', 'email', 'phone'],
    where: {
      email: req.body.username
    },
    include: [{
      model: Pets,
      attributes: ['id_pet', 'pet_name', 'race'],
      include: [{
        model: Appointments,
        attributes: ['id_appoint', 'day', 'time']
      }]
    }]
  })

  res.json(appointments)
}
