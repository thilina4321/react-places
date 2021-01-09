const express = require('express')
const router = express.Router()

const controller = require('../controller/user')

router.post('/signup', controller.signup)
router.post('/login', controller.login)
router.get('/me', controller.me)
router.get('/users', controller.otherUsers)
router.get('/profile/:id', controller.profile)


module.exports = router