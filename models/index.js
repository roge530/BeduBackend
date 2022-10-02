if (process.env.NODE_ENV != 'production') {
  dotenv.config()
}

import * as dotenv from 'dotenv'
import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(process.env.DATABASE_URL)



