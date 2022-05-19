import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewTodayTask from "./Pages/ViewTodayTask";
import ViewWeekTask from "./Pages/ViewWeekTask";
import EditTask from "./Pages/EditTask";
import ListTask from "./Pages/ListTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewTodayTask />} />
        <Route path="/weeks-task" element={<ViewWeekTask />} />
        <Route path="/edit-task" element={<EditTask />} />
        <Route path="/all-task" element={<ListTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
