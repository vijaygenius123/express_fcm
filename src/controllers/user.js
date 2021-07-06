const User = require('../models/user')
const FCM = require('fcm-node')

var serverKey = require('../../config/serviceAccount.json') //put the generated private key path here

var fcm = new FCM(serverKey)


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

const sendNotification = async (req, res) => {
    const user =  await User.findOne({name: req.body.name})
    console.log(user)
    const message = {
        to: user.deviceToken,

        notification: {
            title: 'Title',
            body: 'Body'
        },
    }

    fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!")
        } else {
            console.log("Successfully sent with response: ", response)
        }
    })
}


module.exports = {
    saveUserToken,
    sendNotification
}
