const express = require('express')
const router = express.Router()
const { getSignUp, postSignUp } = require('../controllers/authControllers')


router.get('/signup', getSignUp)
router.post('/signup', postSignUp)

module.exports = router