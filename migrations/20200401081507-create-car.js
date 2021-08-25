"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Cars", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      car_title: {
        type: Sequelize.STRING
      },
      car_location: {
        type: Sequelize.STRING
      },
      car_model_id: {
        type: Sequelize.INTEGER
      },
      car_year: {
        type: Sequelize.DATE
      },
      car_transmission: {
        type: Sequelize.STRING
      },
      car_price: {
        type: Sequelize.STRING
      },
      car_imgs: {
        type: Sequelize.BLOB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Cars");
  }
};
