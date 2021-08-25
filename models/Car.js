"use strict";
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define(
    "Car",
    {
      car_title: { allowNull: false, type: DataTypes.STRING },
      car_location: { allowNull: false, type: DataTypes.STRING },
      //car_brand_id: { allowNull: false, type: DataTypes.INTEGER },
      car_model_id: { allowNull: false, type: DataTypes.INTEGER },
      car_year: { allowNull: false, type: DataTypes.DATE },
      car_transmission: { allowNull: false, type: DataTypes.STRING },
      car_price: { allowNull: false, type: DataTypes.STRING },
      car_imgs: DataTypes.BLOB
    },
    {}
  );
  Car.associate = function (models) {
    // associations can be defined here
    Car.belongsTo(models.Model, {
      foreignKey: "car_model_id",
      onDelete: "CASCADE",
      as: "model_car"
    });
  };
  return Car;
};
