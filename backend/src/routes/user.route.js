import express from "express";
import { query } from "express-validator";
import * as userController from "../controller/user.controller.js"

const router = express.Router();

router.get("/greet", // greet route with query validator
    query("name").isString().withMessage("Name is required"),
    userController.greetName);

export default router;