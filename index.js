import express from 'express'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv-safe'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
import { sequelize } from './config/db.js'
import { router } from './routes/index.js'

// middlewares
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

// routes
app.use('/', router);

async function main() {
    try {
        //await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`App running on port ${PORT}.`)
        })
    } catch (error) {
        console.error('Cannot connect to the database: ', error)
    }
}
main()
