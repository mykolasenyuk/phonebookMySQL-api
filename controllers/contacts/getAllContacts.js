const Contact = require('../../models/contact')

const getAllContacts = async (req, res, next) => {
  try {
    const data = await Contact.getAllContacts()
    const contacts = data[0]

    res.status(200).json({
      contacts,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getAllContacts
