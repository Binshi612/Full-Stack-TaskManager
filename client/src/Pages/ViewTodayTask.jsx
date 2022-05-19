import React from "react";
import SingleTask from "../Components/SingleTask";
import "./ViewTodayTask.css";

function ViewTodayTask() {
  return (
    <div className="taskhead">
      <h1>Todays Tasks</h1>
      <div className="addtask">
        <button className="btns">Add Task</button>
      </div>
      <div className="list">
        <SingleTask />
        <SingleTask />
      </div>
    </div>
  );
}

export default ViewTodayTask;
