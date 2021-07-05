const User = require('../models/user')


const saveUserToken = async (req, res) => {
    const userBody = req.body
    const newUser = new User(userBody)
    try{
        await newUser.save()
        res.status(201).json(newUser)
    } catch (err){
        res.status(400).json({
            message: err.message
        })

    }
}


module.exports = {
    saveUserToken
}
