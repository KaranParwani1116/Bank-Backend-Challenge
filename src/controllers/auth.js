const User = require('../models/user')

//Signup controller
const signup = async (req, res) => {
    //Generating unique account number of a user
    req.body.accountNumber = Math.floor(10000000 + Math.random() * 90000000);
    const user = new User(req.body)

    const { accountNumber, name, userName } = user

    try {
        const token = await user.generateAuthToken()
        res.status(201).send({ name, userName, accountNumber, token })
    } catch (error) {
        console.log(error)

        // error message for username if it already exists
        if (error.code == 11000) {
            res.status(500).send({
                code: 11000,
                message: 'user name already exist'
            })
        }

        return res.status(400).send(error)
    }
}

//Login controller
const login = async (req, res) => {
    try {
        let user = await User.findOne({ userName: req.body.userName, password: req.body.password })

        if (!user) {
            return res.status(404).send({
                message: "Please Upload your csv details"
            })
        }

        let token = await user.generateAuthToken()
        let {name, userName, accountNumber} = user

        return res.send({name, userName, accountNumber, token})

    } catch (error) {
        return res.status(400).send(error)
    }

}

module.exports = {
    signup,
    login
}