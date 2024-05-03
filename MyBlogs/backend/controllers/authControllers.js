const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' })
}

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

        //     if (!isCorrectPassword) {
        //         return res.status(400).json({
        //             message: 'wrong password',
        //         })
        //     } else {
        //         return res.status(200).json({
        //             data: userExist,
        //         })
        //     }
        // }
        if (!isCorrectPassword) {
            return res.status(400).json({ message: 'wrong password' })
        }
        const token = generateToken(userExist._id)
        res.status(200).json({ token })
    } catch (error) {
        console.log('error', error)
        res.status(400).json({ message: 'unknown error' })
    }
}

const getLoggedInUserDetails = async (req, res) => {
    try {
        let { token } = req.body

        // Verify the JWT
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                console.error('Token is not valid:', err.message)
                return res.status(400).json({ message: 'unknown error' })
            } else {
                let userId = decoded.userId
                let user = await User.findById(userId).select('-password')
                return res.status(200).json({ data: user })
            }
        })
    } catch (error) {
        console.log('error', error)
        res.status(400).json({ message: 'unknown error' })
    }
}

module.exports = {
    createAccount,
    logIn,
    getLoggedInUserDetails,
}
