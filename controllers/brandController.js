const sequelize = require("sequelize");
const Op = sequelize.Op;
const Brand = require("../models").Brand;
const { createError } = require("../validation");
module.exports = {
  getAllBrands(order, ordermethod, result) {
    //console.log("panamera");
    return Brand.findAll({
      attributes: ["brand_name", "id"],

      order: [[order, ordermethod]],
    })
      .then((brand) => {
        return result(null, brand);
      })
      .catch((err) => {
        const customError = createError(err);
        result(customError, null);
      });
  },
};
