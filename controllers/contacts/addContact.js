const Contact = require('../../models/contact')

const addContact = async (req, res, next) => {
  try {
    const name = req.body.name
    // console.log(name)
    const number = req.body.number
    //
    const contact = new Contact(null, name, number)

    await contact.save()

    res.status(200).json({
      name,
      number,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = addContact
