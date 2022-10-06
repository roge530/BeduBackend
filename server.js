import { sequelize } from './models/index.js'
import express from 'express'
import handleRoutes from './routes/handleRoutes.js'

const app = express()

app.use(express.json())
app.use(handleRoutes)


async function main() {
  try {
    await sequelize.sync({force: true})
    app.listen(process.env.PORT || 3000, () => console.log("Server listening"))
    console.log("connection was succesful")
  } catch(err) {
    console.log("connection not succesful")
}
}

main()

