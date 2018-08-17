const {Seminar} = require('../models')


module.exports =  {
    async index(req, res){
        try{
            let seminars = null
            console.log(req.query.search)
            if (req.query.search){
                seminars = await Seminar.findAll({
                    where: {
                        title: {
                            $like: `%${req.query.search}%`
                        }
                    },
                    limit: 10
                })
            }
            else {
                seminars = await Seminar.findAll({
                    limit: 10
                })
            }
            // console.log(seminars)
            res.send(seminars)
        }catch (err){
            res.status(500).send('An error has occured trying to fetch the seminars')
        }
    },
    async show(req, res){
        try {
            const seminar = await Seminar.findById(req.params.seminarId)
            res.send(seminar)
        } catch(err){
            res.status(500).send({
                error: 'an error has occured trying to fetch the seminars'
            })
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