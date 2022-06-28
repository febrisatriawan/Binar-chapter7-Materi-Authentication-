const {User} = require("../models")

function format(user){
    const {id,username} = user

    return {
        id,
        username,
        accessToken: user.generateToken()
    }
}

module.exports = {
    login: (req, res) => {
        try{
            User.authenticate(req.body).then(user => {
                res.json(
                    format(user)
                )
            })
        }catch(err){
            res.send(err.message, 422)
        }
    },
    whoami: (req, res) => {
        const currentUser = req.user

        res.json(currentUser)
    }
}