import React, { useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./EditTask.css";

function EditTask() {
  let location = useLocation();
  const [taskName, setTaskName] = useState(location.state.taskName);
  const [description, setDescription] = useState(location.state.description);
  const [dueDate, setDueDate] = useState(location.state.dueDate);
  const [difficulty, setDifficulty] = useState(location.state.difficulty);
  // const [difficulty, setDifficulty] = useState();

  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();
    let task = {
      taskName,
      description,
      dueDate,
      difficulty,
    };

    // console.log(task);
    await axios.patch(
      "http://localhost:5000/api/tasks/" + location.state.taskID,
      task
    );
    navigate("/all-task");
  };
  useEffect(() => {
    console.log(location.state);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="edittask">
        <h1>Edit Task</h1>
        <div className="contents">
          <form className="form" action="">
            <div className="item">
              <input
                className="input"
                value={taskName}
                type="text"
                placeholder="Enter Task Name"
                onChange={(e) => setTaskName(e.target.value)}
              />
            </div>
            <div className="item">
              <textarea
                className="textarea"
                value={description}
                placeholder="Enter Task Description"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="item">
              <label>Due Date :</label>
              <input
                className="input-1"
                value={dueDate}
                type="date"
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            <div className="item">
              <label>Difficulty :</label>
              <div>
                <input
                  className="radio"
                  type="radio"
                  value="Easy"
                  onClick={() => {
                    setDifficulty("Easy");
                  }}
                  checked={difficulty == "Easy"}
                />
                Easy
              </div>
              <div>
                <input
                  className="radio"
                  type="radio"
                  value="Medium"
                  onClick={() => {
                    setDifficulty("Medium");
                  }}
                  checked={difficulty == "Medium"}
                />
                Medium
              </div>
              <div>
                <input
                  className="radio"
                  type="radio"
                  value="Hard"
                  onClick={() => {
                    setDifficulty("Hard");
                  }}
                  checked={difficulty == "Hard"}
                />
                Difficult
              </div>
            </div>
            <div className="footer">
              <button className="btn" onClick={formSubmit}>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditTask;
