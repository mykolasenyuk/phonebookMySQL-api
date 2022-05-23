const db = require('../bin/server')
module.exports = class Contact {
  constructor(id, name, number) {
    this.id = id
    this.name = name
    this.number = number
  }
  save() {
    db.execute('INSERT INTO contacts (name, number) VALUES (?, ? )', [
      this.name,
      this.number,
    ])
  }
  static deleteById(id) {}

  static getAllContacts() {
    return db.execute('SELECT * FROM contacts')
  }
  static findbyId(id) {}
}
