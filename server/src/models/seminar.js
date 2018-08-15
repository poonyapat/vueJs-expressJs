module.exports = (sequelize, DataTypes) => {
    const Seminar = sequelize.define('Seminar', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        maxAttendees: DataTypes.SMALLINT,
        place: DataTypes.TEXT
    })

    return Seminar
}