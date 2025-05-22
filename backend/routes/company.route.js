import express from "express";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";

export const companyRoute = express.Router();

companyRoute.post("/register", isAuthenticated, registerCompany);
companyRoute.get("/get", isAuthenticated, getCompany);
companyRoute.get("/get/:id", isAuthenticated, getCompanyById);
companyRoute.put("/update/:id", isAuthenticated,singleUpload, updateCompany);
