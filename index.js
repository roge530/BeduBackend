const express = require('express')
const sequelize = require('./config/db')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
const routes = require('./routes/index');
const { Sequelize } = require('sequelize')

// middlewares
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

// routes
app.use('/', routes);

try {
    sequelize.authenticate();
    sequelize.sync();
    console.log('Connected to DB');
} catch (error) {
    console.log('Unable to connect to DB:', error);
}

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})
