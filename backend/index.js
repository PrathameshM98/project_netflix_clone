//step-1
import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});
import express from "express";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

databaseConnection();

const app = express();
//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello connected" });
});

app.use(cors(corsOptions));
// api
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server Listens at Port: ${process.env.PORT}`);
});
