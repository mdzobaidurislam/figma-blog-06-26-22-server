const express = require("express");
const {
  getAllToDo,
  addToDo,
  getToDoById,
  deleteTodoById,
  completedTodoById,
  getAllTodoCompleted,
  updateTodoById,
} = require("../controller/ToDoController");
const router = express.Router();

// blog routes
router.get("/todo/:email", getAllToDo);
router.get("/todocompleted/:email", getAllTodoCompleted);
router.post("/todo", addToDo);
router.put("/todo/:id", completedTodoById);
router.put("/todoid/:id/:email", updateTodoById);
router.get("/todoid/:id", getToDoById);

module.exports = router;
