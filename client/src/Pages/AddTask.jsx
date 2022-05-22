import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

function AddTask() {
  const [difficulty, setDifficulty] = useState();
  const taskNameRef = useRef();
  const taskDescriptionRef = useRef();
  const taskDueDateRef = useRef();
  const navigate = useNavigate();
  const formSubmit = async (e) => {
    e.preventDefault();
    let task = {
      taskName: taskNameRef.current.value,
      description: taskDescriptionRef.current.value,
      dueDate: taskDueDateRef.current.value,
      difficulty: difficulty,
    };
    // console.log(task);
    await axios.post("http://localhost:5000/api/tasks", task);
    navigate("/all-task");
  };
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
                ref={taskNameRef}
              />
            </div>
            <div className="item">
              <textarea
                className="textarea"
                ref={taskDescriptionRef}
                placeholder="Enter Task Description"
              ></textarea>
            </div>
            <div className="item">
              <label>Due Date :</label>
              <input className="input-1" type="date" ref={taskDueDateRef} />
            </div>
            <div className="item">
              <label>Difficulty :</label>
              <div>
                <input
                  className="radio"
                  name="Difficulty"
                  onClick={() => {
                    setDifficulty("Easy");
                  }}
                  type="radio"
                  value="Easy"
                />
                Easy
              </div>
              <div>
                <input
                  className="radio"
                  name="Difficulty"
                  type="radio"
                  onClick={() => {
                    setDifficulty("Medium");
                  }}
                  value="Medium"
                />
                Medium
              </div>
              <div>
                <input
                  className="radio"
                  name="Difficulty"
                  type="radio"
                  onClick={() => {
                    setDifficulty("Hard");
                  }}
                  value="Hard"
                />
                Hard
              </div>
            </div>
            <div className="footer">
              <button className="btn" onClick={formSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
