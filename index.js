import express from 'express'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
import { sequelize } from './config/db.js'
import { router } from './routes/index.js'
import {swaggerOptions} from './config/swagger.js'
import swaggerjsDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import helmet from 'helmet'
import cors from 'cors'

app.use(helmet())
app.use(cors())


// middlewares
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

// routes
app.use('/', router);

//swagger
const swaggerDocs =swaggerjsDoc(swaggerOptions)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

async function main() {
    try {
        //await sequelize.sync({force: process.env.FORCESYNC});
        app.listen(PORT, () => {
            console.log(`App running on port ${PORT}.`)
        })
    } catch (error) {
        console.error('Cannot connect to the database: ', error)
    }
}
main()
