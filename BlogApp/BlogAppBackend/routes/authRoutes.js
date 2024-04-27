const express = require('express')
const router = express.Router()
const { createAccount, logIn } = require('../controllers/authControllers')
router.post('/signup', createAccount)
router.post('/logIn', logIn)

module.exports = router
