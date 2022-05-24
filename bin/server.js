// const mysql = require('mysql2')

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'phonebook',
//   password: 'root',
//   port: '3307',
// })

// module.exports = pool.promise()

const Sequelize = require('sequelize')
const sequelize = new Sequelize('phonebook', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3307,
})
module.exports = sequelize
