const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCarInput(data) {
  let errors = {};
  data.car_title = !isEmpty(data.car_title) ? data.car_title : "";
  data.car_location = !isEmpty(data.car_location) ? data.car_location : "";
  data.car_transmission = !isEmpty(data.car_transmission)
    ? data.car_transmission
    : "";
  data.car_price = !isEmpty(data.car_price) ? data.car_price : "";
  if (validator.isEmpty(data.car_title)) {
    errors.car_title = "Car description is required";
  }
  if (validator.isEmpty(data.car_location)) {
    errors.car_location = "Car location is required";
  }
  if (data.car_model_id > 0) {
  } else {
    errors.car_model_id = "Model is required";
  }
  if (validator.isEmpty(data.car_transmission)) {
    errors.car_transmission = "transmission is required";
  }
  if (validator.isEmpty(data.car_price)) {
    errors.car_price = "Price is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
