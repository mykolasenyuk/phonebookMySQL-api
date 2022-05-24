const express = require('express')

const router = express.Router()

const { contacts: ctrl } = require('../../controllers')

router.get('/', ctrl.getAll)
router.post('/', ctrl.addContact)
router.get('/:id', ctrl.getContactById)
router.delete('/:id', ctrl.dltContactById)
router.patch('/:id', ctrl.updateContact)

module.exports = router
