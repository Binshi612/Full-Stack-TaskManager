import React from "react";
import SingleTask from "../Components/SingleTask";

function ViewWeektask() {
  return (
    <div className="taskhead">
      <h1>Week Tasks</h1>
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

export default ViewWeektask;
