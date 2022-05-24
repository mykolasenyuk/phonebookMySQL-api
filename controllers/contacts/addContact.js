const Contact = require('../../models/contact')

const addContact = async (req, res, next) => {
  try {
    // console.log(req.body)

    const contact = req.body
    await Contact.create(contact)

    res.status(200).json({
      contact,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = addContact
