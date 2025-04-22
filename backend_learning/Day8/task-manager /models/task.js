const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "completed", "in-progress"],
      default: "pending",
    },
    dueDate: { type: Date, required: false },
  },
  { timestamps: true }
);


const Task = mongoose.model("Task", taskSchema);

module.exports = Task;