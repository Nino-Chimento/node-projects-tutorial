const express = require("express");
require("dotenv").config();
const connectDB = require("./db/connect");
const app = express();
const tasks = require("./routes/tasks");
const notFound = require("./middleware/not-found");

app.use(express.static("./public"));
app.use(express.json());
app.use(notFound);

app.use("/api/v1/tasks", tasks);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log("server ok"));
  } catch (error) {
    console.log(error);
  }
};

start();
