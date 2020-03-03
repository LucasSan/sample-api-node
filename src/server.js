const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
// const swaggerUi = require('swagger-ui-express')
// const swStats = require('swagger-stats')
// const swaggerDocument = require('./swagger.json')
const config = require('config')

const usersRoutes = require('./users/route')

const app = express()

app.set('port', config.get('APP.PORT'))

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

// app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
// app.use(swStats.getMiddleware({ swaggerSpec: swaggerDocument }))
app.use('/api/users', usersRoutes)

const upServer = () => {
  app.listen(app.get('port'), () => {
    console.log(`[sample-node-api] => [server.js] => [upServer] => Server is running at port: ${app.get('port')}.`)
  })
}

upServer()

module.exports = app
