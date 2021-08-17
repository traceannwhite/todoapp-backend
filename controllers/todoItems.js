//create a new express route
const router = require("express").Router();
const { Router } = require("express");

//import model
const Todo = require("../models/todoItems");

// seed data for the seed route
const todoSeed = [
  {
    item: "Make my to-do list for today!",
    notes: "Don't forget to break it down into easy to check off parts.",
    img: "",
    priority: true,
  },
];

/////////////////////////
// ROUTES
/////////////////////////

// seed route for seeding the database
router.get("/seed", async (req, res) => {
  try {
    await Todo.remove({});
    await Todo.create(todoSeed);
    const todoItems = await Todo.find({});
    res.json(todoItems);
  } catch (error) {
    res.status(400).json(error);
  }
});

// index
router.get("/", async (req, res) => {
  res.json(await Todo.find({}).catch((error) => res.status(400).json(error)));
});

// create new todo
router.post("/", async (req, res) => {
  res.json(
    await Todo.create(req.body).catch((error) => res.status(400).json(error))
  );
});

// update
router.put("/:id", async (req, res) => {
  res.json(
    await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true }).catch(
      (error) => res.status(400).json(error)
    )
  );
});

// destroy
router.delete("/:id", async (req, res) => {
  res.json(
    await Todo.findByIdAndDelete(req.params.id).catch((error) =>
      res.status(400).json(error)
    )
  );
});

module.exports = router;
