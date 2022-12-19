const mongoose = require('mongoose')
const People = require('./models/people')


mongoose.connect('mongodb://localhost/practiseDb', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> {
    console.log('connection open')
}).catch((err)=> {
    console.log(err)
})

const seedPeople = [{name: 'eggs', age: 50}, {name: 'Kevin', age:'7'}]

const seedDb = async()=> {
    await People.deleteMany({})
    await People.insertMany(seedPeople)
}

seedDb().then(()=> {
    mongoose.connection.close()
})
