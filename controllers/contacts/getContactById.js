const Contact = require('../../models/contact')

const getContactById = async (req, res, next) => {
  try {
    const contid = Number(req.params.id)

    // const contact = await Contact.findByPk(id)
    const contact = await req.user.getContacts({ where: { id: contid } })
    console.log(contact)
    if (!contact) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: `Conatct with ID=${id} not found`,
      })
    }

    res.status(200).json({
      contact,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getContactById
