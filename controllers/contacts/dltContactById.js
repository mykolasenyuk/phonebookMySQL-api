const Contact = require('../../models/contact')

const dltContact = async (req, res, next) => {
  try {
    const contid = Number(req.params.id)

    const contact = await req.user.getContacts({ where: { id: contid } })
    // const contact = await Contact.findByPk(id)

    if (!contact[0]) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: `Conatct with ID=${contid} not found`,
      })
    }

    await contact[0].destroy()

    res.status(200).json({
      message: `Conatct with ID=${contid} deleted`,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = dltContact
