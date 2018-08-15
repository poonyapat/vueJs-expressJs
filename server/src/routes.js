const AuthenticationController = require('./controllers/authenticationController')
const AuthenticationControllerPolicy = require('./policies/authenticationControllerPolicy')
const SeminarsController = require('./controllers/seminarsController')

module.exports = (app) => {
    app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/login',
    AuthenticationController.login)

    app.get('/seminars',
    SeminarsController.index)

    app.post('/seminars',
    SeminarsController.post)
}