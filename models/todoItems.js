//import mongoose
const mongoose = require("mongoose");

//pull schema and model from mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;

//create a Schema for todoitems
const todoSchema = new Schema(
  {
    item: { type: String, required: true },
    notes: String,
    img: String,
    priority: Boolean,
  },
  { timestamps: true }
);

//create our model object
const Todo = model("Todo", todoSchema);

module.exports = Todo;
