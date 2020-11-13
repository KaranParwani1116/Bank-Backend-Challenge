const User = require('../models/user')

const signup = async (req, res) => {
    //Generating unique account number of a user
    req.body.accountNumber = Math.floor(10000000 * Math.random() * 90000000)
    const user = new User(req.body)

    const {accountNumber, name, userName} = user

    try {
        const token = await user.generateAuthToken()
        res.status(201).send({name, userName, accountNumber})
    } catch (error) {
        console.log(error)
        if(error.code == 11000) {
            res.status(500).send({
                code: 11000,
                message: 'user name already exist try using different one'
            })
        }

        return res.status(500).send(error)
    }
}

module.exports = {
    signup
}