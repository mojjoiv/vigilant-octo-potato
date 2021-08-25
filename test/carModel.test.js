const request = require("supertest");
const app = require("../app");
const sequelize = require("sequelize");
const op = sequelize.op;
describe("Get /car_model", () => {
  test("Should get all model", (done) => {
    request(app)
      .get(`/model`)
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
