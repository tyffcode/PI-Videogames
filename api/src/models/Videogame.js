const DataTypes  = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:{
          args:[5,30],
          msg:"The name must be between 5 and 30 characters long."
        }, 
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:{
          args:[10,200],
          msg:"The description must be between 10 and 200 characters long."
        }, 
      }
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    background_image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    released:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    }
  },
  { timestamps: false }
  );
};
