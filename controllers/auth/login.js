const User = require('../../models/user')
const bcrypt = require('bcryptjs')

const login = async (req, res, next) => {
  try {
    //   console.log(req.body)
    const email = req.body.email
    const name = req.body.name
    const password = req.body.password
    // console.log(email)

    const user = await User.findOne({ where: { email: email } })
    // console.log(user)
    const hashedPass = await bcrypt.hash(password, 10)
    console.log(hashedPass)

    const newUser = {
      email: email,
      name: name,
      password: hashedPass,
    }

    // await User.create(newUser)

    res.status(200).json({
      newUser,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = login
