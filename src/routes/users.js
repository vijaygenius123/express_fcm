const express = require('express')
const { saveUserToken, sendNotification } = require('../controllers/user')
const router = express.Router()

router.post('/save', saveUserToken)
router.post('/notify', sendNotification)
module.exports = router

