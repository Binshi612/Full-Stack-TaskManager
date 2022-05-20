import React from "react";
import Navbar from "../Components/Navbar";

function AddTask() {
  return (
    <div>
      <Navbar />
      <div className="edittask">
        <h1>Add New Task</h1>
        <div className="contents">
          <form className="form" action="">
            <div className="item">
              <input
                className="input"
                type="text"
                placeholder="Enter Task Name"
              />
            </div>
            <div className="item">
              <textarea
                className="textarea"
                placeholder="Enter Task Description"
              ></textarea>
            </div>
            <div className="item">
              <label>Due Date :</label>
              <input className="input-1" type="date" />
            </div>
            <div className="item">
              <label>Difficulty :</label>
              <div>
                <input className="radio" type="radio" value="Easy" />
                Easy
              </div>
              <div>
                <input className="radio" type="radio" value="Medium" />
                Medium
              </div>
              <div>
                <input className="radio" type="radio" value="Difficult" />
                Difficult
              </div>
            </div>
            <div className="footer">
              <button className="btn">Updated</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
