const express = require("express");
const router = express.Router();
const multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});
const { CarController } = require("../controllers");

//  @route POST customer
router.post("/",
  upload.single("car_imgs"), (req, res) => {
    console.log("dane");
    console.log(req.file.path);
    console.log(req.body);

    CarController.saveCar(req.body, req.file, (err, car) => {
      if (err) {
        res.status(400).json(err);
        // console.log("dane");
        // console.log(err)
      } else {
        res.status(200).json(car);
      }
    });
  });

//  @route GET cars
//  @desc car list all
//  @access private
router.get("/", (req, res) => {
  const page = parseInt(req.query.page) > 0 ? parseInt(req.query.page) : 0;
  const limit = parseInt(req.query.limit) > 0 ? parseInt(req.query.limit) : 10;
  const order = req.query.hasOwnProperty("order")
    ? req.query.order
    : "car_title";
  const ordermethod = req.query.hasOwnProperty("ordermethod")
    ? req.query.ordermethod
    : "ASC";
  const car_title = req.query.hasOwnProperty("car_title")
    ? req.query.car_title
    : "";
  const car_location = req.query.hasOwnProperty("car_location")
    ? req.query.car_location
    : "";
  const car_transmission = req.query.hasOwnProperty("car_transmission")
    ? req.query.car_transmission
    : "";
  //console.log("mansory");
  CarController.getAllCar(
    page,
    limit,
    order,
    ordermethod,
    car_title,
    car_location,
    car_transmission,
    (err, car) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(car);
      }
    }
  );
});
module.exports = router;
