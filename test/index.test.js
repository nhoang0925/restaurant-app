import { expect, server, BASE_URL } from './setup';
import supertest from "supertest";

/*Get Test*/
describe("Testing the get request for Table Search", () => {
  test("It should get a response of 200", () => {
    return supertest(app)
      .get(`${BASE_URL}/getTable`)
      .expect(200)
      .then((result) => {
        expect(result.statusCode).to.equal(200);
      });
  });
});

/*Post Test */
describe("Testing the post request for reserving table", () => {
  test("This should get a reponse of 200", async () => {
    const result = await supertest(app).post("/api/reserve").send({
      name:"test",
      phone:"123-456-7890",
      email:"test@test.com",
      date: "2022-12-15",
      time: "180000",
      size: "2",
      table:"1",
    });
    expect(result.statusCode).toBe(200);
  });
});

it('post reserve table', done => {
  const data = {};
  server
    .post(`${BASE_URL}/api/reserve`)
    .send(data)
    .expect(200)
    .end((err, res) => {
      expect(res.status).to.equal(200);
      expect(res.body.reserve).to.be.instanceOf(Array);
      res.body.reserve.forEach(m => {
        expect(m).to.have.property('test', data.name);
        expect(m).to.have.property('123-456-7890', data.phone);
        expect(m).to.have.property('test@test.com', data.email);
        expect(m).to.have.property('2022-12-15', data.date);
        expect(m).to.have.property('180000', data.time);
        expect(m).to.have.property('2', data.size);
        expect(m).to.have.property('1', data.table);
      });
      done();
    });
});