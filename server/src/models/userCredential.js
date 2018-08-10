module.exports = (sequelize, DataTypes) => sequelize.define('user_credential', {
    username: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    password: DataTypes.STRING,
    role: DataTypes.ENUM('Admin', 'Internal User', 'External User')
})