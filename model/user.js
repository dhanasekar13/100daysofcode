const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    userName: String,
    email:String
})

const User = mongoose.model('user', UserSchema)

module.exports = {
    User
}