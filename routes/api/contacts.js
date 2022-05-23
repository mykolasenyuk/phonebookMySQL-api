const express = require('express')

const router = express.Router()

const { contacts: ctrl } = require('../../controllers')

router.get('/', ctrl.getAll)
router.post('/', ctrl.addContact)

module.exports = router
