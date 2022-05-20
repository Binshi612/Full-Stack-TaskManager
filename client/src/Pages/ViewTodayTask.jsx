import React from "react";
import SingleTask from "../Components/SingleTask";
import "./ViewTodayTask.css";
import Navbar from "../Components/Navbar";

function ViewTodayTask() {
  return (
    <div>
      <Navbar />
      <div className="taskhead">
        <div className="list">
          <h1>Todays Tasks</h1>
          <SingleTask />
          <SingleTask />
          <SingleTask />
        </div>
      </div>
    </div>
  );
}

export default ViewTodayTask;
