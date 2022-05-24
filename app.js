const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const contactsRouter = require('./routes/api/contacts')

const sequelize = require('./bin/server')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))

app.use(express.json())

app.use(cors())

app.use('/contacts', contactsRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const {
    status = 500,
    message = 'Server error',
  } = err /* default error (4args) */
  res.status(status).json({ message })
})
sequelize
  .sync()
  .then((result) => {
    // console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
app.listen(3000, console.log('database is runnig on port:3000'))
