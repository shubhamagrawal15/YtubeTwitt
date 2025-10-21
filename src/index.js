// require('dotenv').config({path:'./env'})

import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

// while making a connection to the database always use an try catch block for exception handling and aysnc await for handling promises

connectDB();

/*
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("eror", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error while connecting to the database", error);
    throw error;
    
  }
})();
*/
