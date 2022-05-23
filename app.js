const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const contactsRouter = require('./routes/api/contacts')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
// db.execute('SELECT * FROM  contacts')
//   .then((result) => console.log(result[0]))
//   .catch((error) => {
//     console.log(error.message)
//     // process.exit(1)
//   })
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

app.listen(3000, console.log('database is runnig on port:3000'))
