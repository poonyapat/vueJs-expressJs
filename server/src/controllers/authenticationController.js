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
            // res.send(user_credential)
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
                    password: req.body.password
                }
            })
            if (!credential){
                res.status(403).send({
                    error: "Wrong username or password"
                })
            }
            // const isPasswordValid = await credential.comparePassword(req.body.password)
            // if (!isPasswordValid){
            //     res.status(403).send({
            //         error: "Wrong password"
            //     })
            // }
            res.send({
                user: {
                    username: credential.username,
                    role: credential.role
                },
                token: jwtSignUser(req.body)
            })
        }
        catch (err) {
            res.status(500).send({
                error: "An error has occured trying to log in"
            })
        }
    }
}