"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Brands",
      [
        {
          brand_name: "Mercedes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          brand_name: "BMW",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          brand_name: "Audi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          brand_name: "Volkswagen",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          brand_name: "AlfaRomeo",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          brand_name: "Subaru",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Brands", null, {});
  }
};
