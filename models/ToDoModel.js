const mongoose = require("mongoose");

// InventorySchema
const ToDoSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const ToDo = mongoose.model("Todo", ToDoSchema);

module.exports = ToDo;
