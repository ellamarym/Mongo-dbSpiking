const {  mongoose, Schema } = require("mongoose")

const personSchema = new Schema({name: String, age: Number}) 

const People = mongoose.model('people', personSchema)

module.exports = People