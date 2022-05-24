const Contact = require('../../models/contact')

const getContactById = async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    console.log(id)
    const contact = await Contact.findByPk(id)

    res.status(200).json({
      contact,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getContactById
