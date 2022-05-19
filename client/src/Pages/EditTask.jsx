import React from "react";
import "./EditTask.css";

function EditTask() {
  return (
    <div className="edittask">
      <h1>Edit Task</h1>
      <div className="contents">
        <form className="form" action="">
          <div className="item">
            <label>Task Name :</label>
            <br />
            <input className="input" type="text" />
          </div>
          <div className="item">
            <label>Description :</label> <br />
            <input className="input" type="text" />
          </div>
          <div className="item">
            <label>Due Date :</label> <br />
            <input className="input" type="date" />
          </div>
          <div className="item">
            <label>Difficulty :</label> <br />
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
  );
}

export default EditTask;
