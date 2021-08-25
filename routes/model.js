const express = require("express");
const router = express.Router();
const { ModelController } = require("../controllers");
//  @route GET models
//  @desc model list all
//  @access private
router.get("/", (req, res) => {
  const order = req.query.hasOwnProperty("order")
    ? req.query.order
    : "model_name";
  const ordermethod = req.query.hasOwnProperty("ordermethod")
    ? req.query.ordermethod
    : "ASC";
  //console.log("mansory");
  ModelController.getAllModel(order, ordermethod, (err, model) => {
    if (err) {
      res.status(400).json(err);
      // console.log("gt");
      // console.log(err);
    } else {
      res.status(200).json(model);
    }
  });
});
module.exports = router;
