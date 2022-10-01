import { sequelize } from './models/index.js'

async function main() {
  try {
    await sequelize.sync()
    console.log("connection was succesful")
  } catch(err) {
    console.log("connection not succesful")
}
}

main()

