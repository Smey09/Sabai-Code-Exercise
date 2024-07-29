import React from "react";
import "./App.css";
import StateInput from "./components/Form SignUp/StateInput_V1.0";
import HookForm from "./components/Form SignUp/HookForm_V1.0";
import AuthForm from "./components/Form SignUp/AuthForm";
import YukForm from "./components/Form SignUp/YukForm_V1.0";
import TodoApp from "./components/TodoApp";
import AddItem from "./components/Day04/AddItems";
import AddRemove from "./components/Day04/AddRemove";
import UpdateArray from "./components/Day04/UpdateArray";

const App: React.FC = () => {
  return (
    <>
      <div className="bg-yellow-400 p-10 rounded-lg">
        <AuthForm />
      </div>

      {/* Form State */}

      <div>
        <h1>State</h1>
        <div className="bg-slate-300 p-10">
          <StateInput />
        </div>
      </div>

      {/* Form Hook */}

      <div>
        <h1>Hook Form</h1>
        <div className="bg-blue-300 p-10">
          <HookForm />
        </div>
      </div>

      {/* Form Yuk */}

      <div>
        <h1>Yuk Form</h1>
        <div className="bg-gray-400 p-10">
          <YukForm />
        </div>
      </div>

      <div className="bg-gray-500 p-10">
        <div>
          <TodoApp />
        </div>
        <div className="p-10">
          <AddItem />
        </div>
        <div className="p-10">
          <AddRemove />
        </div>
        <div className="p-10">
          <h3 className="text-white">Update Array</h3>
          <UpdateArray />
        </div>
      </div>
    </>
  );
};

export default App;
