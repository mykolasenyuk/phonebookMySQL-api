const Contact = require('../../models/contact')

const getAllContacts = async (req, res, next) => {
  try {
    // const contacts = await Contact.findAll()
    const contacts = await req.user.getContacts()

    console.log(contacts)

    res.status(200).json({
      contacts,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getAllContacts
