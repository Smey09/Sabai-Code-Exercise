import React from "react";
import "./App.css";
import ParentComponent from "./components/Day06-Share-State/ParentComponent";
import StateInput from "./components/Form SignUp/StateInput_V1.0";
import TodoApp from "./components/TodoApp";

const App: React.FC = () => {
  return (
    <>
      <div className="justify-center items-center flex">
        <ParentComponent />
      </div>
      <div>
        <StateInput />
      </div>
      <div>
        <TodoApp />
      </div>
      <TodoApp />
    </>
  );
};

export default App;
