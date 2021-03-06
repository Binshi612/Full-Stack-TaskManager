const connection = require("../config/config");

const getAllTasks = async (req, res) => {
  //executing my sql query to fetch all the tasks from  db
  connection.query(
    "SELECT * FROM task_list WHERE status='false'",
    (err, tasks) => {
      if (err) res.status(500).json({ msg: err });
      else if (tasks.length == 0)
        res.json({
          msg: "Not found.....",
        });
      //if no tasks are found tasks will be empty array
      else res.status(200).json({ tasks });
    }
  );
};
const createTask = async (req, res) => {
  // console.log(req.body)
  connection.query("INSERT INTO task_list SET ?", [req.body], (err, task) => {
    if (err) {
      console.log(err);
      res.status(500).json({ msg: err });
    } else res.status(201).json({ status: "inserted", taskID: task.insertId });
  });
};
const getTask = async (req, res) => {
  connection.query(
    "SELECT * FROM task_list WHERE taskID=?",
    [req.params.id],
    (err, task) => {
      if (err) res.status(500).json({ msg: err });
      else if (task.length == 0) res.json({ msg: "No task found....." });
      else res.status(200).json({ task });
    }
  );
};
const deleteTask = async (req, res) => {
  connection.query(
    "DELETE FROM task_list WHERE taskID=?",
    [req.params.id],
    (err, task) => {
      if (err) res.status(500).json({ msg: err });
      else
        res
          .status(200)
          .json({ status: "deleted", deletedRows: task.affectedRows });
    }
  );
};
const updateTask = async (req, res) => {
  console.log(req.body);
  connection.query(
    "UPDATE  task_list SET ?  WHERE taskID=?",
    [req.body, req.params.id],
    (err, task) => {
      if (err) res.status(500).json({ msg: err });
      else
        res
          .status(200)
          .json({ status: "updated", updatedRows: task.affectedRows });
    }
  );
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
