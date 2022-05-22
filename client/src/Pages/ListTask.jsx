import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import SingleTask from "../Components/SingleTask";

function ListTask() {
  const [list, setList] = useState();
  const fetchTaskList = async () => {
    const response = await axios.get("http://localhost:5000/api/tasks");
    console.log(response.data.tasks);
    setList(response.data.tasks);
  };
  useEffect(() => {
    fetchTaskList();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="taskhead">
        <div className="list">
          <h1>All Tasks</h1>
          {list &&
            list.map((obj) => {
              return <SingleTask data={obj} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default ListTask;
