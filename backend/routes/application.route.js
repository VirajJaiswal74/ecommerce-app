import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import {
  applyJob,
  getApplicants,
  getAppliedJobs,
  updateStatus,
} from "../controllers/application.controller.js";

export const applicationRoute = express.Router();

applicationRoute.post("/apply/:id", isAuthenticated, applyJob);
applicationRoute.get("/get", isAuthenticated, getAppliedJobs);
applicationRoute.get("/:id/applicants", isAuthenticated, getApplicants);
applicationRoute.put("/status/:id/update", isAuthenticated, updateStatus);
