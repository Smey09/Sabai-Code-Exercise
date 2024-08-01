// App.js or similar file
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainApp from "../Screen/MainApp";
import TodoPage from "../Page/TodoPage";

const RouteAppPage: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/todoApp" element={<TodoPage />} />
      </Routes>
    </Router>
  );
};

export default RouteAppPage;
