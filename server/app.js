const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const connection = require("./config/config");

//Routes
const taskRouter = require("./routes/task");

//middlewares
app.use(cors());
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/tasks", taskRouter);
app.get("/", (req, res) => {
  res.send("Successfull");
});

const port = 5000;
const start = async () => {
  try {
    await connection.connect();
    console.log("Database Connected");
    app.listen(port, (err) => {
      if (err) console.log(err);
      else console.log("Server Running ...");
    });
  } catch (error) {
    console.log(error);
  }
};
start();
