const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const {
  createCustomError,
  createCustomerError,
} = require("../errors/custom-erros");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return next(createCustomerError(`No task id ${taskId}`, 404));
  }
  res.status(200).json(task);
});

const updateTask = asyncWrapper(async (req, res) => {
  t;
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomerError(`No task id ${taskId}`, 404));
  }
  res.status(200).json({ id: taskId, data: req.body, oldData: task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const taskDelete = await Task.findOneAndDelete({ _id: taskId });
  if (!taskDelete) {
    return next(createCustomerError(`No task id ${taskId}`, 404));
  }
  res.status(200).json({ task: taskId, status: "success" });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
