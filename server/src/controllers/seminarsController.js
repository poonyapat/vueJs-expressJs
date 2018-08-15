const {Seminar} = require('../models')


module.exports =  {
    async index(req, res){
        try{
            const seminars = await Seminar.findAll({
                limit: 10
            })
            console.log(seminars)
            res.send(seminars)
        }catch (err){
            res.status(500).send('An error has occured trying to fetch the seminars')
        }
    },
    async post(req, res){
        try{
            const seminar = await Seminar.create(req.body)
            res.send(seminar)
        }catch (err){
            res.status(500).send({
                error: 'An error has occurs trying to create the seminar'
            })
        }
    }
}