const express = require("express");
const router = express.Router();
const { BrandController } = require("../controllers");
//  @route GET models
//  @desc model list all
//  @access private
router.get("/", (req, res) => {
  const order = req.query.hasOwnProperty("order")
    ? req.query.order
    : "brand_name";
  const ordermethod = req.query.hasOwnProperty("ordermethod")
    ? req.query.ordermethod
    : "ASC";
  //console.log("mansory");
  BrandController.getAllBrands(order, ordermethod, (err, brand) => {
    if (err) {
      res.status(400).json(err);
      // console.log("gt");
      // console.log(err);
    } else {
      res.status(200).json(brand);
    }
  });
});
module.exports = router;
