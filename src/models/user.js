const { text } = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error("can't use password as password")
            }
        },
    },
    accountNumber: {
        type: Number,
        required: true,
        minlength: 8,
        maxlength: 8,
        unique: true
    },

    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]

}, {
    timestamps: true
})

userSchema.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, 'BankBackendForPractice')
    user.tokens = user.tokens.concat({token})
    await user.save()

    return token
}

module.exports = mongoose.model('User', userSchema)