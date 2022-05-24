const Contact = require('../../models/contact')

const updateContact = async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const updatedData = req.body
    let contact = await Contact.findByPk(id)

    contact.set(updatedData)

    contact = await contact.save()

    res.status(200).json({
      contact,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = updateContact
