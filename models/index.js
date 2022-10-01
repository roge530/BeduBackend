if (process.env.NODE_ENV != 'production') {
  dotenv.config()
}

import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'

export const sequelize = new Sequelize(process.env.DATABASE_URL)



