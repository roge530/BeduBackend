// const {Pool} = require('pg')
// const bcrypt = require('bcryptjs')
import {Pool} from 'pg'
import {bcrypt} from 'bcryptjs'

const pool = new Pool ({
    host: 'localhost',
    user: 'admin',
    password: 'password',
    database: 'api',
    port: '5432'
})

const getHome = (request, response) => {
    response.json({info: 'Node.js, Express and Postgres API'})
}

const getAdministrators = async (request, response) => {
    const res = await pool.query('SELECT * FROM administrators')
    response.status(200).json(res.rows)
}

const getAdminByEmail = async (request, response) => {
    const {email} = request.params
    const res = await pool.query('SELECT * FROM administrators WHERE email = $1', [email])
    response.status(200).json(res.rows)
}

const createAdmin = async (request, response) => {
    const {email, password} = request.body
    let hashed = await bcrypt.hash(password, 8)
    const res = await pool.query('INSERT INTO administrators (email, password) VALUES ($1, $2)', [email, hashed])
    response.status(200).json({info: `${email} as admin`})
}

module.exports = {
    getHome,
    getAdministrators,
    createAdmin,
    getAdminByEmail
}