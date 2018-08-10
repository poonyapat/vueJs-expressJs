module.exports = (sequelize, DataTypes) => sequelize.define('user_credential', {
    username: {
        type: DataTypes.STRING(30),
        primaryKey: true,
    },
    password: DataTypes.STRING(40),
    role: {
        type: DataTypes.ENUM('Admin', 'Internal User', 'External User'),
        notNull: true
    }
})