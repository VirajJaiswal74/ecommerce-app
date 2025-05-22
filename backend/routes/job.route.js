import express from "express";
import {
  getAdminJobs,
  getAllJobs,
  getJobById,
  postJob,
} from "../controllers/job.controller.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

export const jobRoute = express.Router();

jobRoute.post("/post", isAuthenticated, postJob);
jobRoute.get("/get", isAuthenticated, getAllJobs);
jobRoute.get("/get/:id", isAuthenticated, getJobById);
jobRoute.get("/getadminjobs", isAuthenticated, getAdminJobs);
