// const db = require('../bin/server')
// module.exports = class Contact {
//   constructor(id, name, number) {
//     this.id = id
//     this.name = name
//     this.number = number
//   }
//   save() {
//     return db.execute('INSERT INTO contacts (name, number) VALUES (?, ? )', [
//       this.name,
//       this.number,
//     ])
//   }
//   static deleteById(id) {
//     return db.execute('SELECT * FROM contacts WHERE contacts.id = ?', [id])
//   }

//   static getAllContacts() {
//     return db.execute('SELECT * FROM contacts')
//   }
//   static findbyId(id) {
//     return db.execute('SELECT * FROM contacts WHERE contacts.id = ?', [id])
//   }
// }

const Sequelize = require('sequelize')

const sequelize = require('../bin/server')

const Contact = sequelize.define('contact', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
})

module.exports = Contact
