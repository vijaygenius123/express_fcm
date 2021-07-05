const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/users')

const app = express()
const PORT = process.env.PORT || 8000;
let listener


app.use(bodyParser.json())


app.use('/users', userRoutes)

app.get('/', function (req,res){
    res.send("Hello")
})

mongoose.connect(process.env.MONGO_URI,{useUnifiedTopology: true }).then(
    listner = app.listen(PORT, function (){
    console.log(`Server Running On http://localhost:${PORT}`)
})
)


module.exports = app
module.exports = {
    port: listner.address().port
}
