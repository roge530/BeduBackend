const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000

// middlewares
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

// routes
app.use(require('./routes/index'))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})
