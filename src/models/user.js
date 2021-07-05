const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({
    name: String,
    deviceToken: String
})

module.exports = mongoose.model('User', UserSchema)
