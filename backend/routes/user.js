const express = require('express')
const { signupUser, loginUser } = require('../controllers/userController.js')

const router = express.Router()

//login route
router.post('/login', signupUser)

//signup route
router.post('/signup', loginUser)

module.exports = router