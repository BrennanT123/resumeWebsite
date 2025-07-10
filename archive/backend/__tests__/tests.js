import request from "supertest";
import express from "express";

import resumeRouter from "../routes/resumeWebsiteRouter";

const app = express();
// JSON parsing middleware
app.use(express.json());

app.use("/", resumeRouter);

test("check get projects route", (done) => {
  request(app)
    .get("/getProjects")
    .expect("Content-Type", /json/)
    .expect(200)
    .expect((res) => {
      if (res.body.projects.length < 1) {
        throw new Error("Projects did not fetch properly");
      }
      if(!res.body.projects?.[0]?.githubLink)
      {
        throw new Error("Projects content is not correct")
      }
    })
    .end(done);
});
