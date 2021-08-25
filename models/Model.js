"use strict";
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Model",
    {
      model_name: { allowNull: false, type: DataTypes.STRING },
      brand_id: { allowNull: false, type: DataTypes.INTEGER },
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {}
  );
  Model.associate = function(models) {
    // associations can be defined here
    Model.belongsTo(models.Brand, {
      foreignKey: "brand_id",
      onDelete: "CASCADE",
      as: "brand_model"
    });
    Model.hasMany(models.Car, {
      foreignKey: "car_model_id",
      onDelete: "CASCADE",
      as: "model_car"
    });
  };
  return Model;
};
