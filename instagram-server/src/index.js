const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 1010
const path = require('path')
const db = require('./config/db')
const morgan = require('morgan')
const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))

db.connect()

// Request logger
app.use(morgan('combined'))

app.use(cors())

app.use(express.json())
app.use(express.urlencoded())

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`)
})

route(app)

