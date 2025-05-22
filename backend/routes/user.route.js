import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controller.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";

export const userRoute = express.Router();

userRoute.post("/register", singleUpload, register);
userRoute.post("/login", login);
userRoute.get("/logout", logout);
userRoute.put("/profile/update", isAuthenticated,singleUpload, updateProfile);
