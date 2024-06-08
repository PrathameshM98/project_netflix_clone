import dotenv from "dotenv";

dotenv.config({
  path: "./backend/.env",
});

import mongoose from "mongoose";
const databaseConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("mongodb connected successfully");
    })
    .catch((error) => {
      console.log(error);
      console.log(typeof process.env.MONGO_URI);
    });
};
export default databaseConnection;
