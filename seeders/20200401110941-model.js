"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Models",
      [
        {
          model_name: "5 series",
          brand_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          model_name: "GLE coupe",
          brand_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          model_name: "Eclass",
          brand_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          model_name: "Q8",
          brand_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          model_name: "SLS",
          brand_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          model_name: "Toureg",
          brand_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          model_name: "Giulia Quadrifolio",
          brand_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          model_name: "WRX sti",
          brand_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Models", null, {});
  }
};
