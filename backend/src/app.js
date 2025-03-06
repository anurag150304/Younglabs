import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "../src/routes/user.route.js"

const App = express();

App.use(morgan("dev"));
App.use(cors());
App.use(express.urlencoded({ extended: true }));
App.use(express.json());

App.get("/", (req, res) => res.send("Hello World"));

App.use("/user", userRoutes);

export default App;