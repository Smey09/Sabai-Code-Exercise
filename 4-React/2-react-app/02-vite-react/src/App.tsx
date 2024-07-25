import React from "react";
import "./App.css";
// import TodoApp from "./components/TodoApp";
import AddItem from "./components/Day04/AddItems";
import AddRemove from "./components/Day04/AddRemove";
import UpdateArray from "./components/Day04/UpdateArray";

const App: React.FC = () => {
  return (
    <>
      {/* <div>
        <TodoApp />
      </div> */}

      <div className="bg-gray-500">
        <div className="p-10">
          <AddRemove />
        </div>
        <div className="p-10">
          <h3 className="text-white">Update Array</h3>
          <UpdateArray />
        </div>
        <div className="p-10">
          <AddItem />
        </div>
      </div>
    </>
  );
};

export default App;
