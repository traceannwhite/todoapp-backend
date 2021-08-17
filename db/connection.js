// load env var
require("dotenv").config();

//import dependencies
const mongoose = require("mongoose");

//pull environemntal var from process.env object
const MONGODB_URI = process.env.MONGODB_URI;

//remove mongo deprecation warnings
const config = { useUnifiedTopology: true, useNewUrlParser: true };

// connect to DB
mongoose.connect(MONGODB_URI, config);

// create DB connection message
mongoose.connection
  .on("open", () => console.log("MONGO CONNECTION IS OPEN"))
  .on("close", () => console.log("MONGO CONNECTION IS CLOSED"))
  .on("error", (error) =>
    console.log("MONGO CONNECTION ERROR \n***************\n", error)
  );

//export mongoose connection
module.exports = mongoose;
