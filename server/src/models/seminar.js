module.exports = (sequelize, DataTypes) => {
    const Seminar = sequelize.define('Seminar', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: DataTypes.TEXT,
        maxAttendees: {
            type: DataTypes.SMALLINT,
            allowNull: false
        },
        place: DataTypes.TEXT
    })

    return Seminar
}