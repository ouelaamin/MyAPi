'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        address: DataTypes.STRING,
        age: DataTypes.INTEGER,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        root: DataTypes.TINYINT,
        professionnel: DataTypes.TINYINT,
        client: DataTypes.TINYINT
    }, {});
    User.associate = function(models) {};
    return User;
};