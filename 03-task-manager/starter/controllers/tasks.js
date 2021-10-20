const getAllTasks = (req, res) => {
  res.send("all task");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.json({ id: req.params });
};
const updateTask = (req, res) => {
  res.send("change ");
};
const deleteTask = (req, res) => {
  res.send("delete ");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
