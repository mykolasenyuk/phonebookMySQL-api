const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const contactsRouter = require('./routes/api/contacts')
const authRouter = require('./routes/api/auth')
const Contact = require('./models/contact')
const User = require('./models/user')

const sequelize = require('./bin/server')
const { auth } = require('./controllers')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))

app.use(express.json())

app.use(cors())
// app.use((req, res, next) => {
//   User.findByPk(2)
//     .then((user) => {
//       req.user = user
//       next()
//     })
//     .catch((err) => console.log(err))
// })

app.use('/', authRouter)
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

Contact.belongsTo(User, { constrains: true, onDelete: 'CASCADE' })
User.hasMany(Contact)

sequelize
  .sync()
  // .sync({ force: true })
  // .then((result) => {
  //   return User.findByPk(2)
  //   // console.log(result)
  // })
  // .then((user) => {
  //   if (!user) {
  //     return User.create({
  //       name: 'Nicky',
  //       email: 'nicky@mail.go',
  //     })
  //   }
  //   return user
  // })
  .then((user) => {
    // console.log(user)

    app.listen(3000, console.log('database is runnig on port:3000'))
  })
  .catch((err) => {
    console.log(err)
  })
