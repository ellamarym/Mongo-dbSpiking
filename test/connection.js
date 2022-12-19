const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/practiseDb')

mongoose.connection.once('open', ()=> {
    console.log('connection made')
}).on('error', ()=> {
    console.log(error)
})