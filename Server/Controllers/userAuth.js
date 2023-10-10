userModel = require("../Models/userModel")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const sendResponse = (status, message, data) => {
    return ({ status, message, data })
}
const registerUser = async (req, res) => {
    try {
        const { name, phone, email, password } = req.body

        const emailExist = await userModel.findOne({ email })
        const phoneExist = await userModel.findOne({ phone })
        if (emailExist) {
            res.status(200).json(sendResponse(false, 'Email already taken'))
        }
        else if (phoneExist) {
            res.status(200).json(sendResponse(false, 'Phone Number already taken'))
        }
        else {
            addUser = userModel({ name, phone, email, password })
            await addUser.save()
            res.status(200).json(sendResponse(true, 'Account Created Successfully'))
        }
    }
    catch (error) {
        console.log(error)
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        userExist = await userModel.findOne({ email })
        if (!userExist) {
            return (
                res.status(200).json(sendResponse(false, 'No user found Check your Credential Properly'))
            )
        }
        else {
            const isPasswordMatched = await bcrypt.compare(password, userExist.password);
            if (!isPasswordMatched) {
                return (res.status(200).json(sendResponse(false, 'Email and password are not matching')))
            }
            else {
                const authToken = jwt.sign({ userId: userExist._id }, process.env.JWT_SECRET_KEY, { expiresIn: '30m' })
                res.cookie('authToken', authToken, { httpOnly: true,sameSite: 'None', secure: true
            })
                res.status(200).json(sendResponse(true, 'login Successful'))
            }
        }
    } catch (error) {
        console.log(error)
    }
}

const checkLogin = async (req, res) => {
    // console.log('request received')
    // res.status(200).json(sendResponse(true,"User auhenticated successfully"))
}

module.exports = { registerUser, loginUser, checkLogin };