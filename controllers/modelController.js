const sequelize = require("sequelize");
const Op = sequelize.Op;
const Model = require("../models").Model;
const { createError } = require("../validation");
module.exports = {
  getAllModel(order, ordermethod, result) {
    console.log("panamera");
    return Model.findAll({
      attributes: ["model_name", "id", "brand_id"],

      order: [[order, ordermethod]],
    })
      .then((model) => {
        return result(null, model);
      })
      .catch((err) => {
        const customError = createError(err);
        result(customError, null);
      });
  },
};
