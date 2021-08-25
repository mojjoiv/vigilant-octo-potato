const request = require("supertest");
const app = require("../app");
const sequelize = require("sequelize");
const op = sequelize.op;

const Car = require("../models").Car;

const newCar = {
  car_title: "Black GLEcoupe",
  car_location: "Germany",
  car_brand_id: 1,
  car_model_id: 1,
  car_year: "2017",
  car_transmission: "Automatic",
  car_price: "$50000"
};
const testCar = {
  car_title: "Black GLEcoupe",
  car_location: "Germany",
  car_brand_id: 1,
  car_model_id: 1,
  car_year: "2017",
  car_transmission: "Automatic",
  car_price: "$50000"
};

jest.setTimeout(15000);

describe("car", () => {
  describe("POST /car", () => {
    test("Should save a car", done => {
      Car.destroy({
        where: {
          car_title: newCar.car_title
        }
      })
        .then(() => {
          request(app)
            .post("/car")
            .send(newCar)
            .end((err, res) => {
              if (err) {
                return done(err);
              } else {
                Car.findOne({
                  where: {
                    car_title: newCar.car_title
                  }
                })
                  .then(dbCar => {
                    expect(res.statusCode).toBe(200);
                    expect(res.body.message).toBe("Success");
                    Car.destroy({
                      where: {
                        car_title: newCar.car_title
                      }
                    })
                      .then(() => {
                        done();
                      })
                      .catch(err => {
                        return done(err);
                      });
                  })
                  .catch(err => {
                    return done(err);
                  });
              }
            });
        })
        .catch(err => {
          return done(err);
        });
    });
    test("Should return an error if issue exist", done => {
      Car.create(testCar)
        .then(() => {
          request(app)
            .post("/car")
            .send(newCar)
            .end((err, res) => {
              if (err) {
                return done(err);
              } else {
                Car.findOne({
                  where: {
                    car_title: newCar.car_title
                  }
                })
                  .then(dbCar => {
                    const error = res.body.error;
                    expect(res.statusCode).toBe(400);
                    expect(error.car).toBe("Car already exist");
                    Car.destroy({
                      where: {
                        car_title: newCar.car_title
                      }
                    })
                      .then(() => {
                        done();
                      })
                      .catch(err => {
                        return done(err);
                      });
                  })
                  .catch(err => {
                    return done(err);
                  });
              }
            });
        })
        .catch(err => {
          return done(err);
        });
    });
    test("Should return error if empty fields are provided", done => {
      request(app)
        .post("/car")
        .send({
          car_title: "",
          car_location: "",
          car_brand_id: "",
          car_price: ""
        })
        .end((err, res) => {
          if (err) {
            return done(err);
          } else {
            const error = res.body.error;
            expect(res.statusCode).toBe(400);
            expect(error.car_title).toBe("Car description is required");
            expect(error.car_location).toBe("Car location is required");
            expect(error.car_brand_id).toBe("Brand is required");
            expect(error.car_price).toBe("Price is required");
            done();
          }
        });
    });
  });
});

describe("GET /car", () => {
  test("Should get all cars", done => {
    request(app)
      .get(`/car?page=0&limit=5`)
      .end((err, res) => {
        console.log("mclaren");
        console.log(res.body);
        if (err) {
          return done(err);
        } else {
          expect(res.statusCode).toBe(200);
          done();
        }
      });
  });
});
