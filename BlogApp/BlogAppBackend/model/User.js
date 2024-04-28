const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new Schema(
    {
        userName: { type: String, required: true, unique: true },
        fullName: { type: String },
        email: { type: String },
        password: { type: String },
    },
    { timestamps: true }
)

userSchema.pre('save', async function (next) {
    const user = this
    if (!user.isModified('password')) return next()

    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(10)
        // Hash the password along with the salt
        const hash = await bcrypt.hash(user.password, salt)
        // Replace the plain text password with the hashed password
        user.password = hash
        next()
    } catch (error) {
        return next(error)
    }
})

const User = model('user', userSchema)

module.exports = User
