const User = require('../model/User')
const bcrypt = require('bcrypt')
const createAccount = async (req, res) => {
    try {
        let reqBody = req.body
        console.log(reqBody)
        let { newUserDetail } = req.body
        const { username, fullname, password, email } = newUserDetail

        //console.log('data:' + req.body)

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
        let { logDetails } = req.body
        const { username, password } = logDetails
        let userExist = await User.findOne({ userName: username })
        if (!userExist) {
            return res.status(400).json({
                message: 'no userfound',
            })
        }
        const isCorrectPassword = await bcrypt.compare(
            password,
            userExist.password
        )

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
