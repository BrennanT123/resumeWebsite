import express from "express";
import * as resumeCtrl from "../controllers/resumeController.js";

const resumeRouter = express.Router();

resumeRouter.get("/getProjects",resumeCtrl.getProjects)

export default resumeRouter;
