//import required packages
const express = require("express");
//initialize express app
const app = express();
// Ensble CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS, DELETE, PUT,PATCH"
  );
  next();
});
app.use('/uploads', express.static('uploads'));
const bodyParser = require("body-parser");

//Link bodyparser for url reading
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "10gb"
  })
);
app.use(
  bodyParser.json({
    limit: "10gb"
  })
);
//import routes
const { car, model, brand } = require("./routes");

//initialize the router
app.use("/car", car);
app.use("/model", model);
app.use("/brand", brand);

//make app available to other files
module.exports = app;
