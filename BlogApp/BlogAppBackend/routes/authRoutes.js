const express = require('express')
const router = express.Router()
const {
    createAccount,
    logIn,
    getLoggedInUserDetails,
} = require('../controllers/authControllers')
router.post('/signup', createAccount)
router.post('/logIn', logIn)
router.post('/getUser', getLoggedInUserDetails)

module.exports = router
