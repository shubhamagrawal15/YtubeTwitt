/*
// while making a connection to the database always use an try catch block for exception handling and aysnc await for handling promises
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
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

// require('dotenv').config({path:'./env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

const app = express();

dotenv.config({
  path: "./env",
});

app.on("error", (error) => {
  console.log("ERROR", error);
  throw error;
});

connectDB() // this function is an asynchronous event therfore this will fire an promise
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running  at port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB CONNECTION FAIL !!!", error);
  });
