const DataTypes = require('sequelize');
  
module.exports = (sequelize) => {
    //defino el modelo
    sequelize.define('genres', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    { timestamps: false }
    );
};