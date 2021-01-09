const express = require('express')
const router = express.Router()

const controller = require('../controller/place')
const auth = require('../middleware/auth-middleware')

router.post('/new',auth, controller.createPlace)
router.get('/me', auth, controller.currentUserPlaces)
router.get('/places', controller.placesOfOtherUsers)

module.exports = router