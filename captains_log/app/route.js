const express = require('express')
const {index, show, create, update, destroy} = require('./controller')
const router = express.Router()
//

router.get('/', index)
router.get('/:id', show)
router.post('/', create)
router.patch('/:id', update)
router.delete('/:id', destroy)

module.exports = router

