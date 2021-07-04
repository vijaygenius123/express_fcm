const express = require('express')

const app = express()
const PORT = process.env.PORT || 8000;

app.get('/', function (req,res){
    res.send("Hello")
})


const listner = app.listen(PORT, function (){
    console.log(`Server Running On http://localhost:${PORT}`)
})

module.exports = app
module.exports = {
    port: listner.address().port
}
