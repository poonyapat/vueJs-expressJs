const {user_credential} = require('../models')

module.exports =  {
    async register (req, res) {
        try{
            // res.send(user_credential)
            const credential = await user_credential.create(req.body)
            res.send(credential.toJSON())
        }
        catch (err) {
            res.status(400).send({
                error: "This account is already existed"
            })
        }

    }
}