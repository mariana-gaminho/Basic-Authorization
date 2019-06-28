const express = require('express')
const router = express.Router()
const { getSignUp } = require('../controllers/authControllers')


router.get('/signup', getSignUp)
module.exports = router