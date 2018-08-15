const {user_credential} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user){
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports =  {
    async register (req, res) {
        try{
            const credential = await user_credential.create(req.body)
            res.send(credential.toJSON())
        }
        catch (err) {
            res.status(400).send({
                error: "This account is already exist"
            })
        }
    },
    async login (req, res) {
        try{
            const credential = await user_credential.findOne({
                where: {
                    username: req.body.username,
                }
            })
            if (!credential){
                res.status(403).send({
                    error: "This account doesn't exist"
                })
            }
            const isPasswordValid = await credential.comparePassword(req.body.password)
            if (!isPasswordValid){
                res.status(403).send({
                    error: "Wrong password"
                })
            }
            const credJSON = credential.toJSON
            res.send({
                user: credJSON,
                token: jwtSignUser(credJSON)
            })
        }
        catch (err) {
            res.status(500).send({
                error: "An error has occured trying to log in"
            })
        }
    }
}