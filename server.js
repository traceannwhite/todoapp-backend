// get environmental variables
require("dotenv").config();

// get port from .env
const PORT = process.env.PORT;

//import dependencies
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// import database connection
const mongoose = require("./db/connection");

//initialize express server
const app = express();

// call middlware
app.use(cors()); // <- adds cors headers
app.use(express.json()); // <- parses JSON bodies and adds them to req.body
app.use(morgan("tiny")); // <- logging for debugging

// import router
const todoRouter = require("./controllers/todoItems");

//call routes
app.get("/", (req, res) => res.send("Server is in service, master.")); // <- route to the test server
app.use("/todo", todoRouter); // <- sends all /todo requires to the todoRouter

// have the server listen
app.listen(PORT, () =>
  console.log(`I am listening on port ${PORT}, talk to me.`)
);
