const Contact = require('../../models/contact')

const addContact = async (req, res, next) => {
  try {
    console.log(req.user)
    const contact = req.body

    await req.user.createContact(contact)

    res.status(200).json({
      contact,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = addContact
