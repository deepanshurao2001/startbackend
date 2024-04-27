const { Schema, model } = require('mongoose')
const userSchema = new Schema(
    {
        userName: { type: String, required: true, unique: true },
        fullName: { type: String },
        email: { type: String },
        password: { type: String },
    },
    { timestamps: true }
)

const User = model('user', userSchema)

module.exports = User
