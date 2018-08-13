const Joi = require('joi')

module.exports ={
    register(req, res,next){
        const schema = {
            username:Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            ),
            role: Joi.string().regex(
                new RegExp('(^Internal User$|^Admin$|^External User$)')
            )
        }

        const {error, value} = Joi.validate(req.body, schema)
        
        if (error){
            switch(error.details[0].context.key){
                case 'username':
                    res.status(400).send({
                        error: 'you must provide username as email'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `The password provided failed to matched the following rules:
                        <br>
                        1. It must contain ONLY following characters: lower-case, upper-case, numerics
                        <br>
                        2. Its length must be between 8 to 32 characters
                        `
                    })
                    break
                case 'role' :
                    res.status(400).send({
                        error: 'Invalid role: contact Admin'
                    })
                    break;
                default:
                 res.status(400).send({
                     error: 'Invalid registration'
                 })
            }
        }else{
            next()
        }
        
    }
}