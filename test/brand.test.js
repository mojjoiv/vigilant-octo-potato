const request = require("supertest");
const app = require("../app");
const sequelize = require("sequelize");
const op = sequelize.op;
describe("Get /brand", () => {
  test("Should get all brand", (done) => {
    request(app)
      .get(`/brand`)
      .end((err, res) => {
        console.log("turbo");
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
