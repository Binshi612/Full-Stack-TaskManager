import React from "react";
import "./SingleTask.css";

function SingleTask() {
  return (
    <div className="card">
      <div className="header">
        <p></p>
        <h1>Task name</h1>
        <button className="btn">Completed</button>
      </div>

      <hr />
      <div className="content">
        <div className="data">
          <h2>Description :</h2>
          <h2>Due Date :</h2>
          <h2>Difficulty :</h2>
          <h2>Status :</h2>
        </div>
        <div className="options">
          <button className="btn edit">Edit</button>
          <button className="btn delete">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default SingleTask;