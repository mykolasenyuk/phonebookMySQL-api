const Contact = require('../../models/contact')

const getContactById = async (req, res, next) => {
  try {
    const contid = Number(req.params.id)

    // const contact = await Contact.findByPk(id)
    const contact = await req.user.getContacts({ where: { id: contid } })

    res.status(200).json({
      contact,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getContactById
