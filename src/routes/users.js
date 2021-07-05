const express = require('express')
const { saveUserToken } = require('../controllers/user')
const router = express.Router()

router.post('/save', saveUserToken)

module.exports = router

