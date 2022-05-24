const Contact = require('../../models/contact')

const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.findAll()

    res.status(200).json({
      contacts,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getAllContacts
