import React from "react";
import Navbar from "../Components/Navbar";
import SingleTask from "../Components/SingleTask";

function ViewWeektask() {
  return (
    <div>
      <Navbar />
      <div className="taskhead">
        <div className="list">
          <h1>Week Tasks</h1>
          <SingleTask />
          <SingleTask />
        </div>
      </div>
    </div>
  );
}

export default ViewWeektask;
