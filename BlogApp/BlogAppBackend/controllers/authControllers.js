const User = require('../model/User')
const createAccount = async (req, res) => {
    try {
        const { username, fullname, password, email } = req.body

        let existingUser = await User.findOne({ userName: username })

        if (existingUser) {
            return res.status(400).json({
                message: 'username enter exist please try another username',
            })
        }
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        let isEmailValid = pattern.test(email)
        if (!isEmailValid) {
            return res.status(400).json({
                message: 'invalid email',
            })
        }

        const user = new User({
            userName: username,
            fullName: fullname,
            email: email,
            password: password,
        })

        await user.save()
        res.status(201).json({ data: user })
    } catch (error) {
        console.log('error', error)
        res.status(400).json({ message: 'unknown error' })
    }
}

const logIn = async (req, res) => {
    try {
        const { username, password } = req.body
        let userExist = await User.findOne({ userName: username })
        if (!userExist) {
            return res.status(400).json({
                message: 'no userfound',
            })
        }

        let isCorrectPassword = userExist.password === password

        if (!isCorrectPassword) {
            return res.status(400).json({
                message: 'wrong password',
            })
        } else {
            return res.status(200).json({
                data: userExist,
            })
        }
    } catch (error) {
        console.log('error', error)
        res.status(400).json({ message: 'unknown error' })
    }
}

module.exports = {
    createAccount,
    logIn,
}
