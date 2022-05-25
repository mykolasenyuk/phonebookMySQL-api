const Contact = require('../../models/contact')

const dltContact = async (req, res, next) => {
  try {
    const id = Number(req.params.id)

    const contact = await Contact.findByPk(id)

    if (!contact) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: `Conatct with ID=${id} not found`,
      })
    }
    await contact.destroy()

    console.log(contact)
    res.status(200).json({
      message: `Conatct with ID=${id} deleted`,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = dltContact
